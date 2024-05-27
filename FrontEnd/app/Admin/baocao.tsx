import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { LineChart, PieChart } from 'react-native-chart-kit';
import { MaterialIcons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

const chartConfig = {
  backgroundGradientFrom: "#ffffff",
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: "#cccccc",
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 1,
  useShadowColorFromDataset: false,
  fromZero: true,
  withVerticalLabels: false,
  horizontalLabelRotation: 45,
  decimalPlaces: 0,
  paddingBottom: 20,
};

const getChartData = () => ({
  labels: ["", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  datasets: [
    {
      data: [120, 700, 450, 380, 800, 200, 100]
    }
  ]
});

const pieChartData = [
  { name: 'Facebook', population: 30, color: '#C62828', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Instagram', population: 40, color: '#F57C00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'TikTok', population: 30, color: '#FFD600', legendFontColor: '#7F7F7F', legendFontSize: 15 }
];

const BaocaoScreen = () => {
  const [selectedDays, setSelectedDays] = useState(7);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Last 7 days");

  const dropdownOptions = [
    { label: "Last 7 days", value: 7 },
    { label: "Last 15 days", value: 15 },
    { label: "Last 30 days", value: 30 }
  ];

  const handleSelectValue = (value) => {
    setSelectedValue(value.label);
    setSelectedDays(value.value);
    setDropdownVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.overviewRow}>
        <TouchableOpacity onPress={() => setDropdownVisible(!isDropdownVisible)} style={styles.dropdownButton}>
          <Text style={styles.dropdownButtonText}>{selectedValue}</Text>
          <MaterialIcons name={isDropdownVisible ? "keyboard-arrow-up" : "keyboard-arrow-down"} size={20} color="black" />
        </TouchableOpacity>
      </View>
      {isDropdownVisible && (
        <View style={styles.dropdownMenu}>
          {dropdownOptions.map(option => (
            <TouchableOpacity
              key={option.value}
              onPress={() => handleSelectValue(option)}
              style={styles.dropdownItem}
            >
              <Text style={styles.dropdownItemText}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      <ScrollView>
        <View style={styles.chartContainer}>
          <Text style={styles.title}>1.400.000.000đ</Text>
          <Text style={styles.subtitle}>Tổng doanh thu</Text>
          <LineChart
            data={getChartData()}
            width={screenWidth - 70}
            height={230}
            chartConfig={chartConfig}
            bezier
            style={styles.chart}
            withHorizontalLabels={false}
            onDataPointClick={({ value }) => alert(`Giá trị: ${value}`)}
          />
        </View>
        <View style={styles.chartContainer}>
          <Text style={styles.title}>236.000.000đ</Text>
          <Text style={styles.subtitle}>Tổng doanh thu Master</Text>
          <LineChart
            data={getChartData()}
            width={screenWidth - 70}
            height={220}
            chartConfig={chartConfig}
            bezier
            style={styles.chart}
            withHorizontalLabels={false}
            onDataPointClick={({ value }) => alert(`Giá trị: ${value}`)}
          />
        </View>
        <View style={styles.chartContainer}>
          <Text style={styles.title}>236.000.000đ</Text>
          <Text style={styles.subtitle}>Tổng doanh thu Sales</Text>
          <LineChart
            data={getChartData()}
            width={screenWidth - 70}
            height={220}
            chartConfig={chartConfig}
            bezier
            style={styles.chart}
            withHorizontalLabels={false}
            onDataPointClick={({ value }) => alert(`Giá trị: ${value}`)}
          />
        </View>
        <View style={styles.chartContainer}>
          <Text style={styles.title}>1.400.000.000đ</Text>
          <Text style={styles.subtitle}>Tổng doanh thu</Text>
          <LineChart
            data={getChartData()}
            width={screenWidth - 70}
            height={220}
            chartConfig={chartConfig}
            bezier
            style={styles.chart}
            withHorizontalLabels={false}
            onDataPointClick={({ value }) => alert(`Giá trị: ${value}`)}
          />
        </View>
        <View style={styles.pieChartContainer}>
          <Text style={styles.title}>Tỉ lệ nguồn khác theo doanh thu %</Text>
          <PieChart
            data={pieChartData}
            width={screenWidth - 20}
            height={220}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
            formatLabelText={(value, name) => `${value}%`}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  overviewRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
    height: '100%',
    width: '100%',
  },
  dropdownButtonText: {
    fontSize: 16,
    marginRight: 5,
    color: '#6C6C6C',
    fontWeight: 'bold',
  },
  dropdownMenu: {
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    elevation: 5,
  },
  dropdownItem: {
    padding: 10,
  },
  dropdownItemText: {
    fontSize: 16,
  },
  chartContainer: {
    width: screenWidth - 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 0,
    marginLeft: -10, // Shift the chart a bit to the left
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
  },
  pieChartContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
});

export default BaocaoScreen;

