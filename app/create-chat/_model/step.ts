export enum StepEnum {
  Name = "name", // 채팅방 이름 입력
  Provider = "provider", // 서비스 제공자 선택
  Model = "model", //모델 선택
  Prompt = "prompt", //프롬프트 입력
}

export const stepOrder = [
  StepEnum.Name,
  StepEnum.Provider,
  StepEnum.Model,
  StepEnum.Prompt,
];
