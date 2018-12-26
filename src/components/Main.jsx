import React, { Component } from 'react';
import { Power4, Bounce, TimelineMax } from "gsap/TweenMax";
import { authInstance, firestoreInstance } from '../firebase/firebase';
import $ from 'jquery'
import { firestore } from 'firebase';

class Loading extends Component {

  constructor(props) {
    super(props);
    this.state = {
      statusDisplayed: ""
    }
  }

  componentDidMount() {
    window.addRotateTransform('Candy_1', 15, 1);
    window.addRotateTransform('Candy_2', 15, -1);
    window.addRotateTransform('Candy_3', 15, -1);
    window.addRotateTransform('Candy_4', 15, 1);
    window.addRotateTransform('Candy_5', 15, -1);

    let status = ['Contacting Santa Claus', 'Matching Chemistry', 'Initiating Pairing Algorithm', 'Taking-off to North Pole', 'Putting Up Christmas Decorations', 'Preparing Bacon and Cheese', 'Calibrating the Satellite', 'Consulting Patrik Star'];
    setInterval(() => this.setState({ statusDisplayed: status[Math.floor(Math.random() * status.length)] }), 500);
  }

  render() {
    return (      
      <React.Fragment>
    <svg 
      viewBox="0 0 612 792" 
        id="Candy_Gears"
        onload="init(evt)">
        <g id="Candy_1">
          <g>
            <path class="Candy_Red" d="M436.2,324.5c-1.4-9.9-10.6-67.2-42.4-74.3c-8.5,4.9-16.1,11.1-22.4,18.5
              C404.5,257.4,432.1,315.4,436.2,324.5z"/>
            <path class="Candy_Red" d="M435.2,326.3c-9.8,1.3-66.1,10.4-74.1,41.5c4.7,8.5,10.8,16.1,18,22.5C369.1,357.5,426.2,330.4,435.2,326.3z"
              />
            <path class="Candy_Red" d="M435.9,327.2c-6,7.9-39.5,54.2-23,81.9c7.7,2.2,15.8,3.4,24.1,3.4c1.6,0,3.2,0,4.8-0.1
              C411,396.5,432.4,336.5,435.9,327.2z"/>
            <path class="Candy_Red" d="M435.3,325.2c-7.9-6-54.4-39.7-82-22.9c-2,7.4-3.2,15.2-3.2,23.3c0,1.8,0.1,3.6,0.2,5.4
              C366.3,300.5,426.1,321.7,435.3,325.2z"/>
            <path class="Candy_Red" d="M437,327.3c1.4,9.9,10.5,66.9,42.1,74.3c8.7-4.8,16.5-11.1,23-18.5C468.8,394.8,441.1,336.4,437,327.3z"/>
            <path class="Candy_Red" d="M438,325.5c10-1.4,68-10.7,74.5-43.1c-5-8.7-11.5-16.5-19.1-23C506.5,293.1,447.2,321.4,438,325.5z"/>
            <path class="Candy_Red" d="M437.9,326.6c8,6.1,55.3,40.3,82.9,22.4c2.1-7.5,3.2-15.3,3.2-23.4c0-2.1-0.1-4.2-0.3-6.3
              C509,352.1,447.3,330.2,437.9,326.6z"/>
            <path class="Candy_Red" d="M437.3,324.6c6.1-8,40.5-55.6,22.3-83c-7.2-1.9-14.7-3-22.5-3c-2.3,0-4.6,0.1-6.9,0.3
              C462.7,253.8,440.8,315.3,437.3,324.6z"/>
          </g>
          <g>
            <path class="Candy_White" d="M435.9,327.2c0.2-0.5,0.3-0.8,0.4-1c-0.2,0-0.6,0.1-1.1,0.1c-9,4-66.1,31.2-56.1,64
              c9.6,8.6,21.1,15.1,33.8,18.7C396.4,381.4,429.9,335.1,435.9,327.2z"/>
            <path class="Candy_White" d="M435.2,326.3c0.5-0.2,0.8-0.3,1-0.4c-0.2-0.1-0.5-0.4-0.9-0.7c-9.2-3.5-69-24.8-85,5.7
              c0.8,13.3,4.6,25.8,10.8,36.8C369.1,336.7,425.4,327.7,435.2,326.3z"/>
            <path class="Candy_White" d="M437.9,326.6c-0.5-0.2-0.8-0.3-1-0.4c0,0.2,0.1,0.6,0.1,1.1c4.1,9.1,31.9,67.5,65.2,55.7
              c8.5-9.7,15-21.3,18.5-34C493.2,366.9,445.8,332.7,437.9,326.6z"/>
            <path class="Candy_White" d="M437,327.3c-0.2-0.5-0.4-0.8-0.4-1c-0.2,0.2-0.4,0.5-0.7,0.9c-3.5,9.3-24.9,69.3,6,85.1
              c13.5-0.7,26.1-4.6,37.3-10.7C447.5,394.2,438.3,337.2,437,327.3z"/>
            <path class="Candy_White" d="M438,325.5c-0.5,0.2-0.8,0.4-1,0.4c0.2,0.1,0.5,0.4,0.9,0.7c9.4,3.6,71.1,25.5,85.8-7.4
              c-1-13.3-4.9-25.8-11.2-36.8C506,314.8,448,324.1,438,325.5z"/>
            <path class="Candy_White" d="M437.3,324.6c-0.2,0.5-0.3,0.8-0.4,1c0.3,0,0.6-0.1,1.1-0.1c9.2-4.1,68.6-32.4,55.4-66.1
              c-9.7-8.2-21.2-14.4-33.8-17.8C477.7,269.1,443.4,316.6,437.3,324.6z"/>
            <path class="Candy_White" d="M436.2,324.5c0.2,0.5,0.3,0.8,0.4,1c0.2-0.2,0.4-0.5,0.7-0.9c3.5-9.4,25.4-70.8-7.1-85.7
              c-13.2,1-25.5,5-36.4,11.2C425.6,257.3,434.8,314.6,436.2,324.5z"/>
            <path class="Candy_White" d="M435.3,325.2c0.5,0.2,0.8,0.3,1,0.4c0-0.2-0.1-0.6-0.1-1.1c-4.1-9.1-31.7-67.1-64.8-55.8
              c-8.3,9.6-14.6,21-18.1,33.6C380.9,285.6,427.4,319.2,435.3,325.2z"/>
          </g>
        </g>
        <g id="Candy_2">
          <g>
            <path class="Candy_Red" d="M272.1,414.2c-1.1-7.8-8.3-52.7-33.2-58.2c-6.6,3.8-12.6,8.7-17.6,14.5C247.3,361.6,268.9,407,272.1,414.2z"
              />
            <path class="Candy_Red" d="M271.3,415.6c-7.7,1.1-51.8,8.1-58.1,32.5c3.7,6.6,8.5,12.6,14.1,17.6C219.5,440,264.3,418.7,271.3,415.6z"/>
            <path class="Candy_Red" d="M271.9,416.2c-4.7,6.2-30.9,42.5-18,64.1c6,1.7,12.3,2.7,18.9,2.7c1.3,0,2.5,0,3.8-0.1
              C252.4,470.6,269.1,423.5,271.9,416.2z"/>
            <path class="Candy_Red" d="M271.4,414.7c-6.2-4.7-42.6-31.1-64.3-18c-1.6,5.8-2.5,11.9-2.5,18.2c0,1.4,0.1,2.8,0.1,4.2
              C217.3,395.3,264.2,411.9,271.4,414.7z"/>
            <path class="Candy_Red" d="M272.7,416.3c1.1,7.7,8.2,52.4,33,58.2c6.8-3.8,12.9-8.7,18.1-14.5C297.7,469.2,276,423.5,272.7,416.3z"/>
            <path class="Candy_Red" d="M273.5,414.9c7.8-1.1,53.3-8.4,58.3-33.7c-3.9-6.8-9-12.9-15-18C327.2,389.6,280.7,411.7,273.5,414.9z"/>
            <path class="Candy_Red" d="M273.4,415.8c6.3,4.7,43.3,31.6,64.9,17.5c1.6-5.8,2.5-12,2.5-18.4c0-1.7-0.1-3.3-0.2-5
              C329.1,435.8,280.8,418.6,273.4,415.8z"/>
            <path class="Candy_Red" d="M273,414.2c4.8-6.3,31.7-43.5,17.4-65c-5.6-1.5-11.5-2.3-17.7-2.3c-1.8,0-3.6,0.1-5.4,0.2
              C292.9,358.8,275.8,406.9,273,414.2z"/>
          </g>
          <g>
            <path class="Candy_White" d="M271.9,416.2c0.1-0.4,0.2-0.6,0.3-0.8c-0.2,0-0.5,0.1-0.9,0.1c-7,3.2-51.8,24.4-44,50.1
              c7.5,6.7,16.5,11.8,26.5,14.7C240.9,458.7,267.2,422.4,271.9,416.2z"/>
            <path class="Candy_White" d="M271.3,415.6c0.4-0.2,0.6-0.3,0.8-0.3c-0.2-0.1-0.4-0.3-0.7-0.5c-7.2-2.8-54.1-19.4-66.6,4.5
              c0.6,10.4,3.6,20.2,8.4,28.9C219.5,423.7,263.7,416.6,271.3,415.6z"/>
            <path class="Candy_White" d="M273.4,415.8c-0.4-0.1-0.6-0.2-0.8-0.3c0,0.2,0.1,0.5,0.1,0.9c3.2,7.1,25,52.9,51.1,43.7
              c6.7-7.6,11.7-16.7,14.5-26.7C316.8,447.4,279.7,420.5,273.4,415.8z"/>
            <path class="Candy_White" d="M272.7,416.3c-0.2-0.4-0.3-0.6-0.3-0.8c-0.1,0.2-0.3,0.4-0.5,0.7c-2.8,7.3-19.5,54.3,4.7,66.7
              c10.6-0.6,20.5-3.6,29.2-8.4C281,468.7,273.8,424.1,272.7,416.3z"/>
            <path class="Candy_White" d="M273.5,414.9c-0.4,0.2-0.6,0.3-0.8,0.3c0.2,0.1,0.4,0.3,0.7,0.5c7.4,2.8,55.7,20,67.2-5.8
              c-0.7-10.4-3.9-20.2-8.8-28.8C326.8,406.5,281.3,413.9,273.5,414.9z"/>
            <path class="Candy_White" d="M273,414.2c-0.1,0.4-0.2,0.6-0.3,0.8c0.2,0,0.5-0.1,0.9-0.1c7.2-3.2,53.7-25.4,43.4-51.8
              c-7.6-6.5-16.6-11.3-26.5-13.9C304.7,370.7,277.7,408,273,414.2z"/>
            <path class="Candy_White" d="M272.1,414.2c0.2,0.4,0.3,0.6,0.3,0.8c0.1-0.1,0.3-0.4,0.5-0.7c2.8-7.3,19.9-55.5-5.6-67.1
              c-10.3,0.8-20,3.9-28.5,8.8C263.8,361.5,271,406.4,272.1,414.2z"/>
            <path class="Candy_White" d="M271.4,414.7c0.4,0.1,0.6,0.2,0.8,0.3c0-0.2-0.1-0.5-0.1-0.9c-3.2-7.1-24.8-52.6-50.8-43.7
              c-6.5,7.5-11.4,16.5-14.1,26.3C228.8,383.6,265.2,410,271.4,414.7z"/>
          </g>
        </g>
        <g id="Candy_3">
          <g>
            <path class="Candy_Red" d="M436.2,555.2c-1.9-13.8-14.7-93.4-59-103.3c-11.8,6.8-22.3,15.5-31.2,25.7C392.1,462,430.5,542.6,436.2,555.2
              z"/>
            <path class="Candy_Red" d="M434.8,557.7c-13.6,1.9-91.9,14.4-103,57.7c6.6,11.8,15.1,22.3,25,31.3C342.9,601.1,422.3,563.3,434.8,557.7z
              "/>
            <path class="Candy_Red" d="M435.7,558.9c-8.3,11-54.9,75.4-32,113.8c10.7,3.1,21.9,4.8,33.6,4.8c2.3,0,4.5-0.1,6.7-0.2
              C401.2,655.3,430.9,571.8,435.7,558.9z"/>
            <path class="Candy_Red" d="M434.9,556.2c-11-8.3-75.6-55.1-114-31.8c-2.8,10.3-4.4,21.1-4.4,32.3c0,2.5,0.1,5,0.3,7.5
              C339,521.8,422.1,551.3,434.9,556.2z"/>
            <path class="Candy_Red" d="M437.3,559.1c1.9,13.7,14.6,93,58.6,103.2c12.1-6.7,22.9-15.5,32-25.8C481.6,652.9,443,571.8,437.3,559.1z"/>
            <path class="Candy_Red" d="M438.7,556.6c13.9-1.9,94.6-14.9,103.5-59.9c-7-12.2-16-23-26.5-32C533.9,511.6,451.5,550.8,438.7,556.6z"/>
            <path class="Candy_Red" d="M438.5,558.1c11.1,8.4,76.9,56,115.2,31.1c2.9-10.4,4.5-21.3,4.5-32.6c0-3-0.1-5.9-0.4-8.8
              C537.4,593.6,451.6,563.1,438.5,558.1z"/>
            <path class="Candy_Red" d="M437.7,555.4c8.4-11.1,56.2-77.2,30.9-115.4c-10-2.7-20.5-4.1-31.3-4.1c-3.2,0-6.4,0.2-9.5,0.4
              C473,457,442.6,542.3,437.7,555.4z"/>
          </g>
          <g>
            <path class="Candy_White" d="M435.7,558.9c0.3-0.7,0.4-1.1,0.5-1.4c-0.3,0-0.8,0.1-1.5,0.2c-12.5,5.6-91.9,43.4-78,89
              c13.3,11.9,29.3,20.9,47,26C380.8,634.3,427.4,569.9,435.7,558.9z"/>
            <path class="Candy_White" d="M434.8,557.7c0.6-0.3,1.1-0.5,1.4-0.6c-0.3-0.2-0.7-0.5-1.2-0.9c-12.8-4.9-95.9-34.4-118.2,8
              c1.1,18.5,6.4,35.9,15,51.2C342.9,572.1,421.2,559.6,434.8,557.7z"/>
            <path class="Candy_White" d="M438.5,558.1c-0.7-0.2-1.1-0.4-1.4-0.5c0,0.3,0.1,0.9,0.2,1.5c5.7,12.7,44.3,93.8,90.6,77.5
              c11.9-13.4,20.8-29.6,25.8-47.3C515.4,614.2,449.6,566.5,438.5,558.1z"/>
            <path class="Candy_White" d="M437.3,559.1c-0.3-0.6-0.5-1.1-0.6-1.4c-0.2,0.3-0.5,0.7-0.9,1.2c-4.9,12.9-34.5,96.4,8.3,118.3
              c18.7-1,36.3-6.3,51.8-14.9C451.9,652.1,439.2,572.8,437.3,559.1z"/>
            <path class="Candy_White" d="M438.7,556.6c-0.6,0.3-1.1,0.5-1.4,0.6c0.3,0.2,0.7,0.5,1.2,0.9c13.1,5,98.9,35.4,119.3-10.3
              c-1.3-18.5-6.8-35.9-15.6-51.2C533.2,541.7,452.5,554.7,438.7,556.6z"/>
            <path class="Candy_White" d="M437.7,555.4c-0.3,0.7-0.4,1.1-0.6,1.4c0.4-0.1,0.9-0.1,1.5-0.2c12.8-5.8,95.3-45,77-91.9
              c-13.4-11.5-29.4-20-47-24.7C493.9,478.2,446.1,544.3,437.7,555.4z"/>
            <path class="Candy_White" d="M436.2,555.2c0.3,0.6,0.5,1.1,0.6,1.4c0.2-0.3,0.5-0.7,0.9-1.2c4.9-13,35.3-98.4-9.9-119.1
              c-18.3,1.4-35.5,6.9-50.6,15.6C421.5,461.8,434.3,541.5,436.2,555.2z"/>
            <path class="Candy_White" d="M434.9,556.2c0.7,0.2,1.1,0.4,1.4,0.5c0-0.3-0.1-0.8-0.2-1.5c-5.7-12.6-44-93.2-90.1-77.6
              c-11.6,13.4-20.2,29.2-25.1,46.7C359.3,501.1,423.9,547.8,434.9,556.2z"/>
          </g>
        </g>
        <g id="Candy_4">
          <g>
            <path class="Candy_Red" d="M224.9,193c-2.2-14.9-16.9-101.5-67.7-112.2c-13.5,7.4-25.6,16.8-35.8,27.9C174.4,91.7,218.4,179.3,224.9,193
              z"/>
            <path class="Candy_Red" d="M223.3,195.7c-15.6,2-105.5,15.7-118.3,62.6c7.5,12.8,17.3,24.3,28.7,34C117.8,242.8,209,201.8,223.3,195.7z"
              />
            <path class="Candy_Red" d="M224.5,197c-9.6,11.9-63.1,81.8-36.7,123.5c12.2,3.3,25.2,5.2,38.5,5.2c2.6,0,5.2-0.1,7.7-0.2
              C184.8,301.7,218.8,211,224.5,197z"/>
            <path class="Candy_Red" d="M223.5,194.1c-12.6-9.1-86.8-59.9-130.9-34.6c-3.3,11.2-5.1,22.9-5.1,35.1c0,2.7,0.1,5.5,0.3,8.2
              C113.4,156.7,208.8,188.8,223.5,194.1z"/>
            <path class="Candy_Red" d="M226.2,197.2c2.2,14.9,16.8,101,67.2,112.1c13.9-7.3,26.3-16.8,36.8-28C277.1,299.1,232.8,211,226.2,197.2z"
              />
            <path class="Candy_Red" d="M227.8,194.5c15.9-2.1,108.6-16.1,118.9-65c-8-13.2-18.3-24.9-30.5-34.7C337.2,145.6,242.5,188.2,227.8,194.5
              z"/>
            <path class="Candy_Red" d="M227.6,196.2c12.7,9.1,88.3,60.9,132.2,33.8c3.3-11.3,5.1-23.1,5.1-35.4c0-3.2-0.2-6.4-0.4-9.6
              C341.1,234.7,242.6,201.5,227.6,196.2z"/>
            <path class="Candy_Red" d="M226.7,193.2c9.7-12.1,64.6-83.8,35.5-125.3c-11.5-2.9-23.5-4.5-36-4.5c-3.7,0-7.3,0.2-11,0.4
              C267.2,86.3,232.4,179,226.7,193.2z"/>
          </g>
          <g>
            <path class="Candy_White" d="M224.5,197c0.3-0.7,0.5-1.2,0.6-1.5c-0.4,0-1,0.1-1.7,0.2c-14.4,6.1-105.5,47.1-89.6,96.6
              c15.3,13,33.7,22.7,54,28.3C161.4,278.9,214.9,209,224.5,197z"/>
            <path class="Candy_White" d="M223.3,195.7c0.7-0.3,1.3-0.5,1.6-0.7c-0.3-0.2-0.8-0.6-1.4-1c-14.7-5.3-110.2-37.4-135.7,8.7
              c1.3,20.1,7.4,39,17.2,55.6C117.8,211.4,207.7,197.8,223.3,195.7z"/>
            <path class="Candy_White" d="M227.6,196.2c-0.7-0.3-1.3-0.5-1.6-0.6c0,0.4,0.1,0.9,0.2,1.7c6.5,13.8,50.8,101.9,104,84.1
              c13.6-14.6,23.9-32.1,29.6-51.4C315.9,257,240.4,205.3,227.6,196.2z"/>
            <path class="Candy_White" d="M226.2,197.2c-0.3-0.7-0.6-1.2-0.7-1.5c-0.2,0.3-0.6,0.7-1.1,1.3c-5.6,14-39.7,104.6,9.5,128.5
              c21.5-1.1,41.7-6.9,59.5-16.2C243,298.2,228.4,212.1,226.2,197.2z"/>
            <path class="Candy_White" d="M227.8,194.5c-0.7,0.3-1.3,0.5-1.6,0.7c0.3,0.2,0.8,0.6,1.4,1c15,5.4,113.5,38.5,137-11.1
              c-1.5-20.1-7.9-39-17.9-55.6C336.4,178.4,243.7,192.4,227.8,194.5z"/>
            <path class="Candy_White" d="M226.7,193.2c-0.3,0.7-0.5,1.2-0.6,1.5c0.4-0.1,1-0.1,1.8-0.2c14.7-6.2,109.4-48.9,88.4-99.8
              c-15.4-12.4-33.8-21.8-54-26.9C291.3,109.3,236.4,181.1,226.7,193.2z"/>
            <path class="Candy_White" d="M224.9,193c0.3,0.7,0.6,1.2,0.7,1.5c0.2-0.3,0.6-0.7,1.1-1.3c5.7-14.2,40.5-106.9-11.4-129.4
              c-21,1.6-40.7,7.5-58.1,17C208.1,91.5,222.7,178.1,224.9,193z"/>
            <path class="Candy_White" d="M223.5,194.1c0.8,0.3,1.3,0.5,1.6,0.6c0-0.4-0.1-0.9-0.2-1.6c-6.5-13.7-50.6-101.3-103.5-84.3
              c-13.3,14.5-23.3,31.8-28.8,50.8C136.7,134.2,210.9,185,223.5,194.1z"/>
          </g>
        </g>
        <g id="Candy_5">
          <g>
            <path class="Candy_Red" d="M220.1,643.4c-1.3-9.6-10.2-65.1-41.1-72c-8.2,4.7-15.6,10.8-21.7,17.9C189.4,578.4,216.1,634.6,220.1,643.4z
              "/>
            <path class="Candy_Red" d="M219.1,645.1c-9.5,1.3-64.1,10.1-71.8,40.2c4.6,8.2,10.5,15.6,17.4,21.8C155.1,675.4,210.4,649.1,219.1,645.1
              z"/>
            <path class="Candy_Red" d="M219.8,646c-5.8,7.6-38.3,52.5-22.3,79.3c7.4,2.1,15.3,3.3,23.4,3.3c1.6,0,3.1,0,4.7-0.1
              C195.7,713.2,216.4,655,219.8,646z"/>
            <path class="Candy_Red" d="M219.2,644.1c-7.7-5.8-52.7-38.4-79.5-22.2c-2,7.2-3.1,14.7-3.1,22.5c0,1.8,0.1,3.5,0.2,5.2
              C152.4,620.1,210.3,640.7,219.2,644.1z"/>
            <path class="Candy_Red" d="M220.9,646.1c1.3,9.6,10.2,64.8,40.8,72c8.4-4.7,16-10.8,22.3-18C251.7,711.5,224.9,654.9,220.9,646.1z"/>
            <path class="Candy_Red" d="M221.8,644.3c9.7-1.3,65.9-10.4,72.2-41.7c-4.9-8.5-11.1-16-18.5-22.3C288.3,613,230.8,640.3,221.8,644.3z"/>
            <path class="Candy_Red" d="M221.7,645.4c7.7,5.9,53.6,39.1,80.3,21.7c2-7.2,3.1-14.8,3.1-22.7c0-2.1-0.1-4.1-0.3-6.1
              C290.6,670.1,230.8,648.9,221.7,645.4z"/>
            <path class="Candy_Red" d="M221.2,643.5c5.9-7.7,39.2-53.8,21.6-80.5c-7-1.9-14.3-2.9-21.8-2.9c-2.2,0-4.5,0.1-6.6,0.3
              C245.8,574.9,224.6,634.4,221.2,643.5z"/>
          </g>
          <g>
            <path class="Candy_White" d="M219.8,646c0.2-0.5,0.3-0.8,0.4-1c-0.2,0-0.6,0.1-1.1,0.1c-8.7,3.9-64.1,30.2-54.4,62
              c9.3,8.3,20.4,14.6,32.8,18.1C181.5,698.5,214,653.6,219.8,646z"/>
            <path class="Candy_White" d="M219.1,645.1c0.4-0.2,0.8-0.3,1-0.4c-0.2-0.1-0.5-0.4-0.9-0.6c-9-3.4-66.9-24-82.4,5.6
              c0.8,12.9,4.5,25,10.4,35.7C155.1,655.2,209.6,646.4,219.1,645.1z"/>
            <path class="Candy_White" d="M221.7,645.4c-0.5-0.2-0.8-0.3-1-0.4c0,0.2,0.1,0.6,0.1,1.1c4,8.8,30.9,65.4,63.1,54c8.3-9.4,14.5-20.6,18-33
              C275.3,684.5,229.5,651.3,221.7,645.4z"/>
            <path class="Candy_White" d="M220.9,646.1c-0.2-0.4-0.3-0.8-0.4-1c-0.1,0.2-0.4,0.5-0.7,0.8c-3.4,9-24.1,67.2,5.8,82.5
              c13.1-0.7,25.3-4.4,36.1-10.4C231.1,710.9,222.2,655.7,220.9,646.1z"/>
            <path class="Candy_White" d="M221.8,644.3c-0.4,0.2-0.8,0.3-1,0.4c0.2,0.1,0.5,0.4,0.8,0.6c9.1,3.5,68.9,24.7,83.2-7.2
              c-0.9-12.9-4.8-25-10.9-35.7C287.8,634,231.5,643,221.8,644.3z"/>
            <path class="Candy_White" d="M221.2,643.5c-0.2,0.5-0.3,0.8-0.4,1c0.2,0,0.6-0.1,1.1-0.1c8.9-4,66.4-31.4,53.7-64
              c-9.4-8-20.5-14-32.8-17.2C260.4,589.7,227,635.8,221.2,643.5z"/>
            <path class="Candy_White" d="M220.1,643.4c0.2,0.4,0.3,0.8,0.4,1c0.1-0.2,0.4-0.5,0.7-0.8c3.4-9.1,24.6-68.6-6.9-83
              c-12.8,1-24.7,4.8-35.3,10.9C209.9,578.3,218.8,633.8,220.1,643.4z"/>
            <path class="Candy_White" d="M219.2,644.1c0.5,0.2,0.8,0.3,1,0.4c0-0.2-0.1-0.6-0.1-1.1c-4-8.8-30.7-65-62.8-54.1
              c-8.1,9.3-14.1,20.4-17.5,32.6C166.5,605.7,211.6,638.3,219.2,644.1z"/>
          </g>
        </g>
    </svg>
    <h2 style={{textAlign: "center"}}>{this.state.statusDisplayed}</h2>
    </React.Fragment>
    )
  }
}

class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: {},
      userUid: '',
      pair: {},
      pairUid: '',
      participants: []
    }
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  fetchData = async () => {
    firestoreInstance.collection("participants")
      .doc(this.props.user.uid)
      .get()
      .then((docUser) => {
        if (docUser.data().donePairing) {
          $('.modal-box').css({
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }).addClass('is-open');
        }
        this.setState({ user: docUser.data(), userUid: this.props.user.uid});
        firestoreInstance.collection("pairs")
          .where("secretSantaId", '==', this.props.user.uid)
          .get()
          .then((docPair) => {
            if (!docPair.empty) {
              let pairData = docPair.docs.map(d => d.data())[0];
              console.log(pairData.dateTime)
              this.setState({dataTaken: pairData.dateTime});
              firestoreInstance.collection("participants")
                .doc(pairData.goodBoyId)
                .get()
                .then((docGoodBoy) => {
                  this.setState({ pair: docGoodBoy.data(), pairUid: pairData.goodBoyId });
                  clearInterval();
                })
            }
          })
      })
  }

  componentDidMount() {

    firestoreInstance.collection("pairs")
      .onSnapshot(() => {
        this.fetchData();
    })

    firestoreInstance.collection("participants")
        .where("beenPaired", '==', false).onSnapshot((querySnapshot) => {
          let participants = querySnapshot.docs.filter(doc => doc.id != this.props.user.uid).map(doc => { let d = doc.data(); d.id = doc.id; return d });
          this.setState({ participants })
        })

    /* Global Variables */
    var $box = $('.box')

    /* Jump Presents */
    var tlJumpPresent = new TimelineMax({
      paused: true
    });

    $box.mouseenter(function () {

      var $PresentBox = $(this).find('.PresentBox'),
        $PresentBoxShadow = $(this).find('.PresentBoxShadow');

      tlJumpPresent
        .to($PresentBox, 0.5, {
          scaleX: 0.8,
          transformOrigin: "bottom center",
          y: -20,
          ease: Power4.easeInOut
        })
        .to($PresentBox, 0.2, {
          scaleX: 1,
          transformOrigin: "bottom center",
          y: 0,
          ease: Bounce.easeOut
        })
        .to($PresentBoxShadow, 0.5, {
          scaleX: 0.8,
          transformOrigin: "bottom center",
          ease: Power4.easeInOut
        }, "0")
        .to($PresentBoxShadow, 0.2, {
          scaleX: 1,
          transformOrigin: "bottom center",
          ease: Bounce.easeOut
        }, "0.5");

      tlJumpPresent.play();

    });

    $box.click(function (event) {
      event.preventDefault();

      var $thisBox = this,
        $PresentBoxRibbon = $(this).find('.PresentBoxRibbon'),
        $PresentBoxTop = $(this).find('.boxTop'),
        $PresentBoxTopShadow = $(this).find('.boxTopShadow'),
        $PresentRibbonSide = $(this).find('.ribbonSide'),
        $socialLinkP = $(this).find('.socialLinkP');

      /* Open Present */
      var tlOpenPresent = new TimelineMax({
        paused: true
      });
      tlOpenPresent
        .to($PresentBoxRibbon, 0.4, {
          yPercent: 252,
          ease: Power4.easeInOut
        })
        .to($PresentBoxTop, 0.4, {
          yPercent: -80,
          ease: Power4.easeOut
        }, "0")
        .to($PresentBoxTopShadow, 0.2, {
          autoAlpha: 0
        }, "0")
        .to($PresentRibbonSide, 0.4, {
          scaleY: 0.3,
          transformOrigin: "bottom center",
          onComplete: stopHover,
          onCompleteParams: [$thisBox]
        }, "0.2")

        .to($PresentBoxTop, 0.4, {
          rotation: -90,
          transformOrigin: "left center",
          ease: Power4.easeInOut
        }, "0")
        .to($PresentBoxTop, 0.3, {
          yPercent: 400,
          transformOrigin: "left center",
          ease: Bounce.easeOut
        }, "0.4")
        .to($PresentBoxTop, 0.4, {
          rotation: -180,
          transformOrigin: "left center",
          ease: Power4.easeIn
        }, "0.7")
        .to($socialLinkP, 0.6, {
          scale: 1.4,
          yPercent: -130,
          transformOrigin: "top center",
          ease: Power4.easeInOut
        }, "-=0.4");

      tlOpenPresent.play();

      function stopHover(element) {
        $(element).unbind('mouseenter click');
        $(element).css('cursor: default');
      }

    });

    var $trigger = $('.modal-open');
    var $close = $('.modal-close');
    var $modal = $('.modal-box');

    $trigger.on('click', function () {
      $modal.css({
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }).addClass('is-open');
    });

    $close.on('click', function () {
      var top = $trigger.offset().top + $trigger.outerHeight();
      var left = $trigger.offset().left;
      $modal.css({
        top: top,
        left: left,
        width: 0,
        height: '2px'
      }).removeClass('is-open');
    });

  }

  doPairMatching = () => {
    firestoreInstance.collection("participants")
      .doc(this.props.user.uid)
      .get()
      .then((docUser) => {
        if (!docUser.data().donePairing) {
          console.log(this.state.participants);
          let goodBoy = this.state.participants[Math.floor(Math.random() * this.state.participants.length)];
          console.log(goodBoy)
          firestoreInstance.collection("participants")
            .doc(this.state.userUid)
            .update({
              donePairing: true
            })
            .then(() => {
              firestoreInstance.collection("participants")
                .doc(goodBoy.id)
                .update({
                  beenPaired: true
                })
                .then(() => {
                  firestoreInstance.collection("pairs")
                    .add({
                      goodBoyId: goodBoy.id,
                      secretSantaId: this.state.userUid,
                      dateTime: new Date()
                    })
                })
              this.fetchData();
          // querySnapshot.forEach(function(doc) {
          //     // doc.data() is never undefined for query doc snapshots
          //     console.log(doc.id, " => ", doc.data());
          // }
          });
        }})
  }
  
  render() {
    return (
        <div>
          <div className="modal-box" style={{zIndex: 1, pointerEvents: "auto"}}>
            <div className="modal-box-content">
              <div className="contents">
                {
                  this.state.pair ? 
                    this.state.pair.initial == undefined ? ( <Loading></Loading> ) : (
                      <React.Fragment>
                        <h1 className="ttl">{`${this.state.pair.initial}${this.state.pair.generation}`}</h1>
                        <p className="p">Please Have {this.state.pair.gender == "Male" ? 'Him' : 'Her'} a Merry Little Present :) <br/> Merry Christmas! </p>
                        <p style={{textAlign: "center"}}>Data was taken on {this.state.dataTaken.toString()}</p>
                      </React.Fragment>
                    ) : (null)
                }
                <div className="layer-6" />
                <div className="layer-5" />
                <div className="layer-4" />
                <div className="layer-3" />
                <div className="layer-2" />
                <div className="santa" />
                <div className="layer-1" />
              </div>

            </div>
            {/* <button className="modal-close" style={{ pointerEvents: "auto" }}><span className="visuallyhidden">Close modal box</span></button> */}
          </div>
          <div className="wrapper" style={{ zIndex: 0, pointerEvents: "auto" }}>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="xmas" x={0} y={0} viewBox="0 0 270.1 140.1" xmlSpace="preserve" enableBackground="new 0 0 270.1 140.1">
              <g id="Presents" className="modal-open" onClick={this.doPairMatching.bind(this)}>
                <g id="PresentB" className="box">
                  <ellipse id="ShadowPresent" className="PresentBoxShadow" cx="188.2" cy="117.3" rx="81.8" ry="22.8" fill="#81572A" />
                  <g className="PresentBox">
                    <g id="Logo" className="socialLinkP">
                      <a href="#" className="modal-open">
                        <circle cx="182.3" cy="96.3" r="18.5" fill="#FFF"/>
                        <defs>
                          <rect id="SVGID_5_" x="146.7" y="61.9" transform="matrix(-1 5.395776e-03 -5.395776e-03 -1 365.5186 194.4719)" width="71.6" height="71.6" />
                        </defs>
                        <clipPath id="SVGID_1_">
                          <use xlinkHref="#SVGID_5_" overflow="visible" />
                        </clipPath>
                        <path d="M181.1 90.8c-3 0.1-5.5 2.6-5.5 5.6 0 1.7 0.6 3.2 1.7 4.3l8.1-8.2C184.3 91.4 182.8 90.7 181.1 90.8" className="s1" />
                        <path d="M179.6 100.6c1.1 1.1 2.6 1.7 4.3 1.7 3-0.1 5.5-2.6 5.5-5.6 0-1.7-0.6-3.2-1.7-4.3L179.6 100.6z" className="s1" />
                        <polygon points="190 102.8 188.9 101.7 194 96.5 188.8 91.3 190 90.2 196.3 96.5 " className="s2" />
                        <polygon points="175 102.9 168.7 96.6 174.9 90.3 176.1 91.4 170.9 96.6 176.1 101.7 " className="s2" />
                        <defs>
                          <rect id="SVGID_7_" x="144.9" y="59.2" transform="matrix(-1 5.395776e-03 -5.395776e-03 -1 365.5132 192.4719)" width="75.1" height="75.2" />
                        </defs>
                        <clipPath id="SVGID_2_">
                          <use xlinkHref="#SVGID_7_" overflow="visible" />
                        </clipPath>
                        <path d="M180 88.9c0-0.1 0-0.3 0-0.4 0-0.1 0.1-0.3 0-0.4 -0.1-0.2-0.4-0.2-0.5 0 -0.2 0.4-0.2 0.9-0.2 1.3 -0.6 0.3-1.6 0.2-2.3 0 0.5 0.4 1.1 0.6 1.7 0.7 -0.6 0.3-1.2 0.7-1.7 1.1 1.3-0.9 3-0.7 4.2 0.3 -0.1-0.4-0.3-0.8-0.6-1.2 0.7-0.5 1.5-0.7 2.4-0.6 -0.7-0.2-1.3-0.3-2-0.2 0.3-0.2 0.6-0.4 0.8-0.7 -0.6 0.3-1.1 0.4-1.7 0.4C180.1 89.1 180 88.9 180 88.9" style={{ clipPath: 'url(#SVGID_2_)', fill: '#94D500' }} />
                      </a>
                    </g>
                    <rect x="146.8" y={72} width="66.2" height="49.5" fill="#D53938" />
                    <rect x="146.8" y="72.7" width="66.2" height="3.6" fill="#B6282E" className="boxTopShadow" />
                    <rect x={138} y="57.9" width="83.9" height="15.1" fill="#E85E4D" className="boxTop" />
                    <rect x={185} y="57.5" width="10.4" height={64} fill="#FCB51D" className="ribbonSide" />
                    <g className="PresentBoxRibbon">
                      <polygon points="190.7 57.2 175.9 40.8 164.8 52.7 184.4 63.6 " fill="#FCB51D" />
                      <polygon points="184.4 63.5 163.9 61.1 164.8 52.6 " fill="#B61F2B" />
                      <polygon points="190.5 57.3 204.6 40.2 216.2 51.5 197.2 63.4 " fill="#FCB51D" />
                      <polygon points="197.2 63.4 217.5 60 216.2 51.5 " fill="#B61F2B" />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
    );
  }
}

export default Main;
