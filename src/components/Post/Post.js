import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import styles from "./styles";

const Post = ({post}) => {
	return (
		<View style={styles.container}>
			<Image
				source={{
					uri: post.image,
				}}
				style={styles.image}
			/>

			<Text style={styles.bedrooms}>
				{post.bed} bed {post.bedroom} bedroom
			</Text>
			<Text style={styles.desciption} numberOfLines={2}>
				{post.type}. {post.title}
			</Text>
			<Text style={styles.prices}>
				<Text style={styles.oldPrice}>${post.oldPrice}</Text>
				<Text style={styles.newPrice}> ${post.newPrice} </Text>/ night
			</Text>
			<Text style={styles.totalPrice}>${post.totalPrice} total</Text>
		</View>
	);
};

export default Post;
