import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { useGetRandomGroupPostQuery } from '../../src/services/groupsApi';

export default function Group() {
  const [page, setPage] = useState(1);
  const [allPosts, setAllPosts] = useState([]);
  const [hasMorePosts, setHasMorePosts] = useState(true);

  const { data, isFetching, isError, isSuccess ,isLoading} = useGetRandomGroupPostQuery(page);

if (isSuccess) {
  console.log(data);
}

  useEffect(() => {
    if (isSuccess && data?.data) {
      if (data.data.length === 0) {
        setHasMorePosts(false);
      } else {
        const newPosts = data.data.filter(
          (newPost) =>
            !allPosts.some((post) => post.post_id === newPost.post_id)
        );
        if (newPosts.length > 0) {
          setAllPosts((prevPosts) => [...prevPosts, ...newPosts]);
        }
      }
    }
  }, [data, isSuccess]);
  

  const loadMorePosts = useCallback(() => {
    if (hasMorePosts && !isFetching && !isError) {
      console.log('Loading more posts for page:', page + 1);
      setPage((prevPage) => prevPage + 1);
    }
  }, [hasMorePosts,isSuccess, isFetching, isError, page]);

  const renderItem = ({ item }) => (
    <View style={styles.postContainer}>
      <Text style={styles.postText}>Post ID: {item.post_id}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Show ActivityIndicator only for initial load */}
      {isLoading &&  (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
      {isError && <Text style={styles.errorText}>Failed to fetch posts.</Text>}

      <FlatList
        data={allPosts}
        renderItem={renderItem}
        keyExtractor={(item) => item.post_id.toString()}
        onEndReached={loadMorePosts}
        
        ListFooterComponent={() =>
          isFetching && allPosts.length > 0 && <ActivityIndicator size="large" color="#0000ff" />
        }
        contentContainerStyle={allPosts.length === 0 ? styles.emptyList : null} // Handle empty list styling
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  postContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  postText: {
    fontSize: 16,
    color: '#333',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
