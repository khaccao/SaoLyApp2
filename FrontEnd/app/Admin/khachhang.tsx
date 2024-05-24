import React, { useState } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { LineChart } from 'react-native-chart-kit';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedPeriod, setSelectedPeriod] = useState('7days'); // Default to 7 days
  const [revenue, setRevenue] = useState({
    '7days': 0,
    '15days': 0,
    '30days': 0
  });
  const [data, setData] = useState({
    '7days': {
      labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
      datasets: [{ data: [0, 0, 0, 0, 0, 0, 0] }]
    },
    '15days': {
      labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10', 'Day 11', 'Day 12', 'Day 13', 'Day 14', 'Day 15'],
      datasets: [{ data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }]
    },
    '30days': {
      labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10', 'Day 11', 'Day 12', 'Day 13', 'Day 14', 'Day 15', 'Day 16', 'Day 17', 'Day 18', 'Day 19', 'Day 20', 'Day 21', 'Day 22', 'Day 23', 'Day 24', 'Day 25', 'Day 26', 'Day 27', 'Day 28', 'Day 29', 'Day 30'],
      datasets: [{ data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }]
    }
  });

  // Function to update revenue and chart data based on selected date range
  const updateData = (dateRange) => {
    // Your logic to fetch revenue data and update state
    // Your logic to fetch chart data and update state
    const revenueData = calculateRevenue(dateRange);
    setRevenue(revenueData);
    setSelectedDate(new Date());
    setData({
      ...data,
      [dateRange]: {
        ...data[dateRange],
        labels: generateLabels(dateRange)
      }
    });
  };

  // Function to generate labels based on selected date range
  const generateLabels = (dateRange) => {
    // Your logic to generate labels based on date range
    // For simplicity, returning dummy labels here
    switch (dateRange) {
      case '7days':
        return ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];
      case '15days':
        return Array.from({ length: 15 }, (_, i) => `Day ${i + 1}`);
      case '30days':
        return Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);
      default:
        return [];
    }
  };

  // Function to calculate revenue based on selected date range
  const calculateRevenue = (dateRange) => {
    // Your logic to calculate revenue based on date range
    // For simplicity, returning dummy revenue data here
    switch (dateRange) {
      case '7days':
        return { '7days': 1000, '15days': 2000, '30days': 3000 };
      case '15days':
        return { '7days': 1500, '15days': 2500, '30days': 3500 };
      case '30days':
        return { '7days': 2000, '15days': 3000, '30days': 4000 };
      default:
        return { '7days': 0, '15days': 0, '30days': 0 };
    }
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedPeriod}
        style={{ height: 50, width: 200 }}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedPeriod(itemValue);
          updateData(itemValue);
        }}
      >
        <Picker.Item label="7 Days" value="7days" />
        <Picker.Item label="15 Days" value="15days" />
        <Picker.Item label="30 Days" value="30days" />
      </Picker>
      <Text>Total Revenue: {revenue[selectedPeriod]}</Text>
      <View style={{ flexDirection: 'row' }}>
        <LineChart
          data={data[selectedPeriod]}
          width={170}
          height={220}
          yAxisLabel="$"
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
        <LineChart
          data={data[selectedPeriod]}
          width={170}
          height={220}
          yAxisLabel="$"
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
        <LineChart
          data={data[selectedPeriod]}
          width={170}
          height={220}
          yAxisLabel="$"
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
        <LineChart
          data={data[selectedPeriod]}
          width={170}
          height={220}
          yAxisLabel="$"
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;

