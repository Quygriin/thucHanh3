import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, FlatList, Dimensions } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const banners = [
    require('./assets/berger.jpg'),
    require('./assets/berger.jpg'),
    require('./assets/berger.jpg'),
  ];

  const popularItems = [
    { id: '1', name: 'Cheese Burger', price: '$5.99', rating: '4.8 (1.2k)', image: require('./assets/berger.jpg') },
    { id: '2', name: 'Chicken Pizza', price: '$8.99', rating: '4.7 (950)', image: require('./assets/berger.jpg') },
    { id: '3', name: 'Coca Cola', price: '$1.50', rating: '4.9 (2.3k)', image: require('./assets/berger.jpg') },
    { id: '4', name: 'Fried Rice', price: '$6.50', rating: '4.6 (780)', image: require('./assets/berger.jpg') },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.locationContainer}>
          <MaterialIcons name="location-on" size={20} color="#FF5733" />
          <Text style={styles.locationText}>Savar, Dhaka</Text>
        </View>
        
        <View style={styles.searchContainer}>
          <TextInput placeholder="Search your food" style={styles.searchInput} />
          <FontAwesome name="search" size={20} color="#888" style={styles.searchIcon} />
        </View>
      </View>
      
      <View style={styles.bannerContainer}>
        <FlatList
          data={banners}
          renderItem={({ item }) => <Image source={item} style={styles.bannerImage} />}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <ScrollView style={styles.contentContainer}>
        <View style={styles.categoriesContainer}>
          <TouchableOpacity style={styles.categoryItem}><Text style={styles.categoryText}>PIZZA</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.categoryItem, styles.activeCategory]}><Text style={[styles.categoryText, styles.activeCategoryText]}>BURGER</Text></TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}><Text style={styles.categoryText}>DRINK</Text></TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}><Text style={styles.categoryText}>RICE</Text></TouchableOpacity>
        </View>

        <View style={styles.hotOfferContainer}>
          <Text style={styles.sectionTitle}>Today's Hot Offer</Text>
          <TouchableOpacity style={styles.offerCard}>
            <Image source={require('./assets/berger.jpg')} style={styles.offerImage} />
            <View style={styles.offerDetails}>
              <Text style={styles.offerTitle}>MEGA BURGER COMBO</Text>
              <View style={styles.ratingContainer}>
                <Ionicons name="star" size={16} color="#FFD700" />
                <Text style={styles.ratingText}>4.9 (3k+ Rating)</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        
        <View style={styles.popularContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular Items</Text>
            <TouchableOpacity><Text style={styles.viewAllText}>View All</Text></TouchableOpacity>
          </View>
          <FlatList
            data={popularItems}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.popularItem}>
                <Image source={item.image} style={styles.popularItemImage} />
                <View style={styles.popularItemInfo}>
                  <Text style={styles.popularItemName}>{item.name}</Text>
                  <Text style={styles.popularItemPrice}>{item.price}</Text>
                  <View style={styles.popularItemRating}>
                    <Ionicons name="star" size={14} color="#FFD700" />
                    <Text style={styles.popularItemRatingText}>{item.rating}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
            numColumns={2}
            columnWrapperStyle={styles.popularItemsWrapper}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { padding: 15, backgroundColor: '#FF5733', borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
  locationContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  locationText: { marginLeft: 5, fontSize: 16, fontWeight: 'bold', color: '#fff' },
  searchContainer: { position: 'relative', backgroundColor: '#fff', borderRadius: 10, marginHorizontal: 10 },
  searchInput: { backgroundColor: '#f2f2f2', borderRadius: 10, padding: 15, paddingLeft: 45, fontSize: 16 },
  searchIcon: { position: 'absolute', left: 15, top: 15 },
  bannerContainer: { height: 150, marginTop: 10 },
  bannerImage: { width: width - 30, height: 150, borderRadius: 10, marginHorizontal: 15, resizeMode: 'cover' },
  categoriesContainer: { flexDirection: 'row', justifyContent: 'center', paddingVertical: 5, backgroundColor: '#f8f8f8' },
  categoryItem: { paddingHorizontal: 15, paddingVertical: 5, borderRadius: 15 },
  activeCategory: { backgroundColor: '#FF5733' },
  categoryText: { fontSize: 14, color: '#888', fontWeight: 'bold' },
  activeCategoryText: { color: '#fff' },
  hotOfferContainer: { padding: 15, backgroundColor: '#FFE5B4', borderRadius: 10, margin: 10 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  offerCard: { borderRadius: 10, backgroundColor: '#f9f9f9' },
  offerImage: { width: '100%', height: 150, borderRadius: 10 },
  offerDetails: { padding: 10 },
  ratingContainer: { flexDirection: 'row', alignItems: 'center' },
  popularContainer: { padding: 15 },
  popularItemsWrapper: { justifyContent: 'space-between' },
  popularItem: { width: '48%', backgroundColor: '#fff', borderRadius: 10, marginBottom: 10, elevation: 2 },
});

export default HomeScreen;
