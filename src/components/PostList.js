import React from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'
import { Post } from './Post'

export const PostList = ({ data, onOpen }) => {

  if (!data.length) {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.onItems}>There is no Posts</Text>
      </View>
    )
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={onOpen} />} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  },
  onItems: {
    fontFamily: 'open-regular',
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 18
  }
})