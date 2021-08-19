import { Component } from "react";
import { StyleProp, ViewStyle, TextStyle } from "react-native";

declare module "react-native-media-modal" {
  export type MediaModalProps = {
    title?: string;
    message?: string;
    showCancel?: boolean;
    showConfirm?: boolean;
    textCancel?: string;
    textConfirm?: string;
    backdropClose?: boolean;
    useNativeDriver?: boolean;
    textPositionTop: boolean;
    onCancel?: () => void;
    onConfirm?: () => void;
    onClose?: () => void;
  };

  class AlertPro extends Component<MediaModalProps> {
    open(): void;
    close(): void;
  }

  export default MediaModal;
}