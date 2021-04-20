import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  BackgroundMask: {
    flex: 1,
    backgroundColor: '"rgba(0, 0, 0, 0.4)"',
    justifyContent: "center",
    alignItems: "center",
    position: "relative"
  },
  container: {
    backgroundColor: "#FFF",
    maxWidth: 390,
    marginHorizontal: 30,
    borderRadius: 10,
    position: 'absolute',
    padding: 10
  },
  media: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    color: "#333",
    fontWeight: "500",
    lineHeight: 25
  },
  message: {
    textAlign: "center",
    fontSize: 17,
    color: "#666",
    paddingTop: 10
  },
  closeButton: {
    width: 35,
    height: 35,
    backgroundColor: '#000',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 70,
    position: 'absolute',
    right: -14,
    top: -14,
  },
  closeButtonIcon: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12
  },

  customComponent: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "relative"
  },

  ContentContainer: {
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 5,
    flexWrap: "wrap"
  },
  
  button: {
    marginBottom: 20,
    marginHorizontal: 10,
    alignItems: "center",
    padding: 8,
    borderRadius: 5,
  },

  buttonCancel: {
    backgroundColor: "#fff"
  },

  buttonConfirm: {
    backgroundColor: '#0042a6'
  },

  textButton: {
    fontSize: 15,
    textAlign: "center",
  },

  textButtonConfirm: {
    color: '#fff'
  },

  textButtonCancel: {
    color: '#757575'
  },


});

export default styles;
