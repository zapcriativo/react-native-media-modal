import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Animated, Text, View, Image, ActivityIndicator, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import { WebView } from 'react-native-webview';

import styles from "./styles";

const SUPPORTED_ORIENTATIONS = [
  "portrait",
  "portrait-upside-down",
  "landscape",
  "landscape-left",
  "landscape-right"
];

class MediaModal extends Component {
  constructor() {
    super();
    this.state = { visible: false };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
    this.springValue = new Animated.Value(0);
  }

  open() {
    const { useNativeDriver } = this.props;
    this.setState({ visible: true }, () => {
      Animated.spring(this.springValue, {
        toValue: 1,
        speed: 35,
        bounciness: 7,
        velocity: 15,
        useNativeDriver: useNativeDriver
      }).start();
    });
  }

  close() {
    const { onClose } = this.props;
    this.setState({ visible: false }, () => {
      this.springValue.setValue(0);
      if (typeof onClose === "function") onClose();
    });
  }

  onCancel() {
    const { onCancel } = this.props;
    if (typeof onCancel === "function") onCancel();
  }

  onConfirm() {
    const { onConfirm } = this.props;
    if (typeof onConfirm === "function") onConfirm();
  }

  render() {
    const {
      title,
      message,
      backdropClose,
      mediaImage,
      showMedia,
      mediaURL,
      customComponent,
      customStyles,
      showCancel,
      showConfirm,
      textCancel,
      textConfirm,
      textPositionTop
    } = this.props;

    const { visible } = this.state;

    return (
      <Modal
        visible={visible}
        transparent
        animationType="none"
        supportedOrientations={SUPPORTED_ORIENTATIONS}
        onRequestClose={backdropClose ? this.close : null}
      >

        <TouchableOpacity
          activeOpacity={1}
          onPress={backdropClose ? this.close : null}
          style={[styles.BackgroundMask, customStyles.BackgroundMask]}
        >
          <TouchableWithoutFeedback>
            <Animated.View style={[styles.container, customStyles.container, { transform: [{ scale: this.springValue }] }]}>

              {textPositionTop && (
                <View style={[styles.ContentContainer, customStyles.title]}>
                  {title && (<Text style={[styles.title, customStyles.title]}>{title}</Text>)}
                  {message && (<Text style={[styles.message, customStyles.message]}>{message}</Text>)}
                </View>
              )}


              {showMedia && (
                <View>
                  {mediaImage ? (
                    <Image
                      source={{ uri: mediaURL }}
                      style={[styles.media, customStyles.media]}
                      PlaceholderContent={<ActivityIndicator color={customStyles.pictureLoadingColor} />}
                    />
                  ) : (
                    <WebView
                      style={[styles.media, customStyles.media]}
                      javaScriptEnabled={true}
                      source={{ uri: mediaURL }}
                    />
                  )}
                </View>
              )}

              {customComponent && (
                <View style={[styles.customComponent, customStyles.customComponent]}>
                  {customComponent}
                </View>
              )}

              {!textPositionTop && (
                <View style={[styles.ContentContainer, customStyles.title]}>
                  {title && (<Text style={[styles.title, customStyles.title]}>{title}</Text>)}
                  {message && (<Text style={[styles.message, customStyles.message]}>{message}</Text>)}
                </View>
              )}


              <View style={styles.buttonContainer}>
                {showCancel ? (
                  <TouchableOpacity
                    onPress={this.onCancel}
                    style={[styles.button, styles.buttonCancel, customStyles.buttonCancel]}
                  >
                    <Text style={[styles.textButton, styles.textButtonCancel, customStyles.textButtonCancel]}>{textCancel}</Text>
                  </TouchableOpacity>
                ) : null}

                {showConfirm ? (
                  <TouchableOpacity
                    onPress={this.onConfirm}
                    style={[styles.button, styles.buttonConfirm, customStyles.buttonConfirm]}
                  >
                    <Text style={[styles.textButton, styles.textButtonConfirm, customStyles.textButtonConfirm]}>{textConfirm}</Text>
                  </TouchableOpacity>
                ) : null}

              </View>


              <TouchableOpacity onPress={() => this.close()} style={[styles.closeButton, customStyles.closeButton]}>
                <Text style={[styles.closeButtonIcon, customStyles.closeButtonIcon]}>X</Text>
              </TouchableOpacity>

            </Animated.View>
          </TouchableWithoutFeedback>


        </TouchableOpacity>
      </Modal>
    )
  }
}

MediaModal.propTypes = {
  customStyles: PropTypes.objectOf(PropTypes.object),
  title: PropTypes.string,
  message: PropTypes.string,
  backdropClose: PropTypes.bool,
  onClose: PropTypes.func,
  mediaImage: PropTypes.bool, // video or image
  mediaURL: PropTypes.string,
  useNativeDriver: PropTypes.bool,
  showCancel: PropTypes.bool,
  showConfirm: PropTypes.bool,
  showMedia: PropTypes.bool,
};

MediaModal.defaultProps = {
  customStyles: {},
  title: null,
  message: null,
  backdropClose: true,
  onClose: null,
  showMedia: true,
  mediaImage: true, // image or webview
  mediaURL: 'https://free-images.com/sm/1797/contre_jour_on_english.jpg',
  useNativeDriver: false,
  showCancel: false,
  showConfirm: false,
  textCancel: 'Maybe later!',
  textConfirm: 'Yes, I do',
  textPositionTop: false,
  customComponent: null
};

export default MediaModal