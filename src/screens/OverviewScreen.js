import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { BarChart, Grid } from 'react-native-svg-charts';
import { connect } from 'react-redux';

class OverviewScreen extends React.Component {
  static navigationOptions = {
    title: 'Overview',
  };

  render() {
    const fill = 'rgb(134, 65, 244)';
    const data = [
      50,
      10,
      40,
      95,
      -4,
      -24,
      85,
      91,
      35,
      53,
      -53,
      24,
      50,
      -20,
      -80,
    ];
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text>There should be graph. In the future.</Text>
          <BarChart
            style={{ height: 200 }}
            data={data}
            svg={{ fill }}
            contentInset={{ top: 30, bottom: 30 }}
          >
            <Grid />
          </BarChart>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

const mapStateToProps = state => ({
  transactions: state.transactions,
});

export default connect(mapStateToProps)(OverviewScreen);
