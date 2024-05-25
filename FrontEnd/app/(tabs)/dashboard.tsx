import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { LineChart, PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const screenWidth = Dimensions.get('window').width;

export default function DashboardScreen() {
  const [selectedRange, setSelectedRange] = useState('Last 7 days');

  const pieData = [
    {
      name: 'Facebook',
      population: 67.2,
      color: 'rgba(131, 167, 234, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Instagram',
      population: 9.0,
      color: '#F00',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  const lineChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 50],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#eff3ff',
    backgroundGradientTo: '#efefef',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
  };

  const rangeOptions = [
    { label: 'Last 7 days', value: 'Last 7 days' },
    { label: 'Last 30 days', value: 'Last 30 days' },
    { label: 'Last 3 months', value: 'Last 3 months' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>SAOLY</Text>
        <View style={styles.searchContainer}>
          <Icon name="search" />
          <Text style={styles.searchText}>Search...</Text>
        </View>
        <Icon name="notifications" />
        <Image 
          source={{ uri: 'https://example.com/avatar.png' }} 
          style={styles.avatar} 
        />
      </View>
      
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{selectedRange}</Text>
          <RNPickerSelect
            onValueChange={(value) => setSelectedRange(value)}
            items={rangeOptions}
            style={pickerSelectStyles}
            Icon={() => {
              return <Icon name="arrow-drop-down" size={24} color="gray" />;
            }}
          />
        </View>
        
        <View style={styles.cardContainer}>
          <LineChart
            data={lineChartData}
            width={screenWidth * 0.45}
            height={220}
            chartConfig={chartConfig}
            style={styles.chart}
          />
          <LineChart
            data={lineChartData}
            width={screenWidth * 0.45}
            height={220}
            chartConfig={chartConfig}
            style={styles.chart}
          />
        </View>

        <View style={styles.cardContainer}>
          <LineChart
            data={lineChartData}
            width={screenWidth * 0.45}
            height={220}
            chartConfig={chartConfig}
            style={styles.chart}
          />
          <LineChart
            data={lineChartData}
            width={screenWidth * 0.45}
            height={220}
            chartConfig={chartConfig}
            style={styles.chart}
          />
        </View>
        
        <PieChart
          data={pieData}
          width={screenWidth}
          height={220}
          chartConfig={{
            backgroundColor: '#1cc910',
            backgroundGradientFrom: '#eff3ff',
            backgroundGradientTo: '#efefef',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      </View>

      <View style={styles.bottomNavigation}>
        <Icon name="dashboard" />
        <Icon name="people" />
        <Icon name="add-circle" />
        <Icon name="bar-chart" />
        <Icon name="settings" />
      </View>
    </ScrollView>
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  iconContainer: {
    top: 10,
    right: 12,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 5,
  },
  searchText: {
    marginLeft: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  section: {
    padding: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#f4f4f4',
  },
});
