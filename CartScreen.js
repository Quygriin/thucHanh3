import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const CartScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header with time */}
      <View style={styles.header}>
        <Text style={styles.time}>9:00</Text>
      </View>
      
      {/* Title */}
      <Text style={styles.title}>Shopping Cart</Text>
      
      {/* Discount badge */}
      <View style={styles.discountBadge}>
        <Text style={styles.discountText}>10% OFF</Text>
      </View>
      
      {/* Item in cart */}
      <View style={styles.itemContainer}>
        <View style={styles.itemImageContainer}>
          <Image 
            source={require('./assets/berger.jpg')} // Replace with your actual image path
            style={styles.itemImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>BURGER</Text>
          <Text style={styles.itemRating}>4.9 (3k+ Rating)</Text>
        </View>
      </View>
      
      {/* Delivery address */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Image 
            source={require('./assets/icon.png')} // Replace with your actual icon
            style={styles.sectionIcon}
          />
          <Text style={styles.sectionTitle}>Delivery Address</Text>
        </View>
        <Text style={styles.sectionContent}>Dhaka, Bangladesh</Text>
      </View>
      
      {/* Payment method */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Image 
            source={require('./assets/favicon.png')} // Replace with your actual icon
            style={styles.sectionIcon}
          />
          <Text style={styles.sectionTitle}>Payment Method</Text>
        </View>
        {/* Payment method content would go here */}
      </View>
      
      {/* Checkout summary */}
      <View style={styles.summarySection}>
        <Text style={styles.summaryTitle}>Checkout Summary</Text>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Subtotal (2)</Text>
          <Text style={styles.summaryValue}>$56</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Delivery Fee</Text>
          <Text style={styles.summaryValue}>$6.20</Text>
        </View>
        <View style={[styles.summaryRow, styles.totalRow]}>
          <Text style={styles.totalLabel}>Payable Total</Text>
          <Text style={styles.totalValue}>$62.2</Text>
        </View>
      </View>
      
      {/* Confirm order button */}
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirm Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  time: {
    fontSize: 16,
    color: '#333',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  discountBadge: {
    backgroundColor: '#FF5733',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginBottom: 20,
  },
  discountText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  itemImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    overflow: 'hidden',
  },
  itemImage: {
    width: '80%',
    height: '80%',
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemRating: {
    fontSize: 14,
    color: '#888',
  },
  section: {
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  sectionContent: {
    fontSize: 14,
    color: '#333',
    marginLeft: 30, // Align with icon + margin
  },
  summarySection: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#555',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#666',
  },
  summaryValue: {
    fontSize: 14,
    color: '#333',
  },
  totalRow: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#e2e2e2',
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  totalValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF5733',
  },
  confirmButton: {
    backgroundColor: '#FF5733',
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 20,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CartScreen;