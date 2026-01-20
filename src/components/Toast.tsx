import { Toast as TGToast, useToastState } from "@tamagui/toast";
import { YStack } from "tamagui";

export function Toast() {
  const currentToast = useToastState();

  if (!currentToast || currentToast.isHandledNatively) return null;

  return (
    <TGToast
      key={currentToast.id}
      duration={currentToast.duration}
      viewportName={currentToast.viewportName}
      enterStyle={{ opacity: 0, scale: 0.5, y: -25 }}
      exitStyle={{ opacity: 0, scale: 1, y: -20 }}
      y={0}
      opacity={1}
      scale={1}
      animation="quick"
    >
      <YStack py="$1.5" px="$2">
        <TGToast.Title lineHeight="$1">{currentToast.title}</TGToast.Title>
        {!!currentToast.message && (
          <TGToast.Description>{currentToast.message}</TGToast.Description>
        )}
      </YStack>
    </TGToast>
  );
}
