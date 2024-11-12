import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { useGetRandomGroupPostQuery } from '../../src/services/groupsApi';
import {REACT_APP_LARAVEL_URL} from '@env';

export default function Group() {
  const [page, setPage] = useState(1);
  const [allPosts, setAllPosts] = useState([]);
  const [hasMorePosts, setHasMorePosts] = useState(true);

  const { data, isFetching,error, isError, isSuccess, isLoading } = useGetRandomGroupPostQuery(page);

  useEffect(() => {
    if (isSuccess && data?.data) {
      if (data.data.length === 0) {
        setHasMorePosts(false);
      } else {
        const newPosts = data.data.filter(
          newPost => !allPosts.some(post => post.post_id === newPost.post_id),
        );
        if (newPosts.length > 0) {
          setAllPosts(prevPosts => [...prevPosts, ...newPosts]);
        }
      }
    }
  }, [data, isSuccess]);

  const loadMorePosts = useCallback(() => {
    if (hasMorePosts && !isFetching && !isError) {
      console.log('Loading more posts for page:', page + 1);
      setPage(prevPage => prevPage + 1);
    }
  }, [hasMorePosts, isFetching, isError, page]);

  const renderItem = ({ item }) => (
    <View style={styles.postContainer}>
      <Text style={styles.postText}>Post ID: {item.post_id}</Text>
    </View>
  );

  // Add a new state for handling the initial load state
  const [isInitialLoadComplete, setIsInitialLoadComplete] = useState(false);

  // Mark the initial load as complete when the first successful fetch occurs
  useEffect(() => {
    if (isSuccess && data?.data) {
      setIsInitialLoadComplete(true);
    }
  }, [isSuccess, data]);

  return (
    <View style={styles.container}>

    <Text>{REACT_APP_LARAVEL_URL}</Text>
     
      {isLoading && !isInitialLoadComplete && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}

      <FlatList
        data={allPosts}
        renderItem={renderItem}
        keyExtractor={item => item.post_id.toString()}
        onEndReached={loadMorePosts}
        ListFooterComponent={() =>
          isFetching && allPosts.length > 0 && (
            <ActivityIndicator size="large" color="#0000ff" />
          )
        }
        ListEmptyComponent={() =>
          !isLoading && !isFetching && allPosts.length === 0 && isInitialLoadComplete ? (
            <Text style={styles.emptyText}>No posts available</Text>
          ) : null
        }
        contentContainerStyle={allPosts.length === 0 ? styles.emptyList : null} // Handle empty list styling
      />

      {isError && <Text style={styles.errorText}>Failed to fetch posts.</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject, // This covers the entire screen
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Optional: adds a light overlay effect
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
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
  },
});
