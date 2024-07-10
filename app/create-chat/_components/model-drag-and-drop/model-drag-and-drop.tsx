import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./model-drag-and-drop.module.css";
import Image from "next/image";
import { Tag } from "@/types/tag";
import { useFormContext } from "react-hook-form";
import { FormData } from "../../_types/form-data";

const DROP_ZONE_POSITIONS = {
  Left: "left",
  Right: "right",
} as const;

type DropZonePosition =
  (typeof DROP_ZONE_POSITIONS)[keyof typeof DROP_ZONE_POSITIONS];

interface DropZoneProps {
  tags: Tag[];
  onDrop: () => void;
  onRemoveTag: (tag: Tag) => void;
  title: string;
  isSmall?: boolean;
}

interface TagListProps {
  tags: Array<Tag>;
  onDragStart: (tag: Tag) => void;
}

function ChatRoom({
  tags,
  onDrop,
  onRemoveTag,
  title,
  isSmall,
}: DropZoneProps) {
  return (
    <section
      className={`${styles.dropZoneContainer} ${isSmall ? styles.small : ""}`}
    >
      <h4 className={styles.dropZoneTitle}>{title}</h4>
      <div
        className={styles.dropZone}
        onDrop={onDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        {tags.length === 0 && <div className={styles.plus}>+</div>}
        <ul className={styles.dropZoneTagList}>
          {tags.map((tag) => (
            <li key={tag.value}>
              <button
                onClick={() => onRemoveTag(tag)}
                className={styles.dropZoneTag}
              >
                <Image src={tag.icon} alt={tag.label} width={16} height={16} />
                {tag.label} <span>x</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function TagList({ tags, onDragStart }: TagListProps) {
  return (
    <section className={styles.tagListContainer}>
      <h4 className={styles.tagListTitle}>
        {tags.length > 0
          ? "하단의 태그를 드래그해 추가해보세요."
          : "추가할 태그가 없습니다."}
      </h4>
      <ul className={styles.tagList}>
        {tags.map((tag) => (
          <li
            key={tag.value}
            draggable
            onDragStart={() => onDragStart(tag)}
            className={styles.tag}
          >
            <Image src={tag.icon} alt={tag.label} width={16} height={16} />
            {tag.label}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function ModelDragAndDrop({ models }: { models: Array<Tag> }) {
  const {
    watch,
    setValue,
    register,
    trigger,
    formState: { errors },
  } = useFormContext<FormData>();

  const [tags, setTags] = useState<Array<Tag>>(models);
  const [draggingTag, setDraggingTag] = useState<Tag | null>(null);

  const model = watch("model") || { leftZone: [], rightZone: [] };

  const handleDragStart = useCallback((tag: Tag) => {
    setDraggingTag(tag);
  }, []);

  const handleDrop = useCallback(
    (dropZone: DropZonePosition) => {
      if (draggingTag) {
        setTags((prevTags) =>
          prevTags.filter((tag) => tag.value !== draggingTag.value)
        );
        if (dropZone === DROP_ZONE_POSITIONS.Left) {
          setValue("model.leftZone", [...model.leftZone, draggingTag]);
          trigger("model.leftZone");
        } else {
          setValue("model.rightZone", [...model.rightZone, draggingTag]);
        }
        setDraggingTag(null);
      }
    },
    [draggingTag, model.leftZone, model.rightZone, setValue, trigger]
  );

  const handleRemoveTag = useCallback(
    (dropZone: DropZonePosition, tag: Tag) => {
      const removeTagFromZone = (zoneTags: Tag[]) =>
        zoneTags.filter((item) => item.value !== tag.value);

      if (dropZone === DROP_ZONE_POSITIONS.Left) {
        if (model.leftZone.length === 1 && model.rightZone.length > 0) {
          setValue("model.leftZone", model.rightZone);
          setValue("model.rightZone", []);
        } else {
          setValue("model.leftZone", removeTagFromZone(model.leftZone));
        }
        trigger("model.leftZone");
      } else {
        setValue("model.rightZone", removeTagFromZone(model.rightZone));
      }
      setTags((prevTags) => [...prevTags, tag]);
    },
    [model.leftZone, model.rightZone, setValue, trigger]
  );

  const memoizedTagList = useMemo(
    () => <TagList tags={tags} onDragStart={handleDragStart} />,
    [tags, handleDragStart]
  );

  useEffect(() => {
    register("model.leftZone", {
      validate: (value) =>
        value.length > 0 || "채팅방 1에 적어도 하나의 태그를 추가해주세요.",
    });
  }, [register]);

  return (
    <div>
      {memoizedTagList}
      <div className={styles.dropZoneGroup}>
        <ChatRoom
          tags={model.leftZone}
          onDrop={() => handleDrop(DROP_ZONE_POSITIONS.Left)}
          onRemoveTag={(tag) => handleRemoveTag(DROP_ZONE_POSITIONS.Left, tag)}
          title="채팅방 1"
        />
        {model.leftZone.length > 0 && (
          <ChatRoom
            tags={model.rightZone}
            onDrop={() => handleDrop(DROP_ZONE_POSITIONS.Right)}
            onRemoveTag={(tag) =>
              handleRemoveTag(DROP_ZONE_POSITIONS.Right, tag)
            }
            title="채팅방 2"
            isSmall={model.rightZone.length === 0}
          />
        )}
      </div>
      {errors.model?.leftZone && (
        <p className="errorMessage">{errors.model.leftZone.message}</p>
      )}
    </div>
  );
}
