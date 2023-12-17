// BarChart.js
import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Container, Row, Col } from 'react-bootstrap';

const BarChart = () => {
  // Sample data for the bar chart
  const barChartData = {
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4'],
    datasets: [
      {
        label: 'Sample Bar Chart',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81],
      },
    ],
  };

  // Sample data for the pie chart
  const pieChartData = {
    labels: ['Label A', 'Label B', 'Label C'],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: ['red', 'blue', 'green'],
        hoverBackgroundColor: ['lightcoral', 'lightblue', 'lightgreen'],
      },
    ],
  };

  // Chart options
  const barChartOptions = {
    scales: {
      x: {
        indexAxis: 'category', // Use 'indexAxis' instead of 'type'
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  // Chart options for the pie chart
  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Set to false to customize width and height
    width: 200, // Set the desired width
    height: 200, // Set the desired height
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={8}>
          {/* Bar Chart */}
          <Bar data={barChartData} options={barChartOptions} />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={4}>
          {/* Smaller Pie Chart */}
          <Pie data={pieChartData} options={pieChartOptions} />
        </Col>
      </Row>
    </Container>
  );
};

export default BarChart;
