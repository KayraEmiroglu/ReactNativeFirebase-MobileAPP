import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  image: {
    marginTop: 50,
    marginLeft: 80,
  },

  head: {
    position: "absolute",
    top: "-6%",
    left: "48.5%",
    width: "18%",
    aspectRatio: 30, // Genişlik ve yükseklik oranını ayarlamak için kullanılır
    marginTop: "22%", // Kafa bölgesinin resim üzerindeki konumuna göre yüzde değeriyle ayarlanır
    marginLeft: "-5%", // Kafa bölgesinin resim üzerindeki konumuna göre yüzde değeriyle ayarlanır
  },
  leftArm: {
    position: "absolute",
    top: "26%", // Sol kolun resim üzerindeki konumuna göre ayarlanmalı
    left: "28%", // Sol kolun resim üzerindeki konumuna göre ayarlanmalı
    width: "9%", // Sol kolun boyutuna göre ayarlanmalı
    aspectRatio: 0.19, // Sol kolun boyutuna göre ayarlanmalı
  },
  rightArm: {
    position: "absolute",
    top: "26%", // Sol kolun resim üzerindeki konumuna göre ayarlanmalı
    right: "28%", // Sol kolun resim üzerindeki konumuna göre ayarlanmalı
    width: "9%",
    aspectRatio: 0.19,
  },
  body: {
    position: "absolute",
    top: "26%", // Sol kolun resim üzerindeki konumuna göre ayarlanmalı
    right: "39%", // Sol kolun resim üzerindeki konumuna göre ayarlanmalı
    width: "22%", // Sol kolun resim genişliğine göre yüzde değeriyle ayarlanır
    aspectRatio: 0.5, // Genişlik ve yükseklik oranını ayarlamak için kullanılır
  },
  rightLeg: {
    position: "absolute",
    top: "58%", // Sol kolun resim üzerindeki konumuna göre ayarlanmalı
    left: "40%", // Sol kolun resim üzerindeki konumuna göre ayarlanmalı
    width: "10%", // Sol kolun resim genişliğine göre yüzde değeriyle ayarlanır
    aspectRatio: 0.18, // Genişlik ve yükseklik oranını ayarlamak için kullanılır
  },
  leftLeg: {
    position: "absolute",
    top: "58%", // Sol kolun resim üzerindeki konumuna göre ayarlanmalı
    right: "40%", // Sol kolun resim üzerindeki konumuna göre ayarlanmalı
    width: "10%", // Sol kolun resim genişliğine göre yüzde değeriyle ayarlanır
    aspectRatio: 0.18, // Genişlik ve yükseklik oranını ayarlamak için kullanılır
  },
  buttonContainer: {
    position: "absolute",
    top: 20,
    right: 60,
  },
  button: {
    paddingBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  selected: {
    backgroundColor: "rgba(255, 0, 0, 0.3)",
  },
});
