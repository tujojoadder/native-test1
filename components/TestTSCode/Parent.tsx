import {View, Text} from 'react-native';
import React from 'react';
import Child1 from './Child1';
import ArrayProps from './ArrayProps';
import ObjectProps from './ObjectProps';
import FunctionProps from './FunctionProps';
import ArrayOfObject from './ArrayOfObject';
import Union, {Status1} from './Union';
import JustUnion from './JustUnion';

export default function Parent() {
  let Object1 = {
    name: 'Tj',
    subject: ['bangla', 'english'],
  };
  // function
  let display = (): number => {
    return 10;
  };

  let myArrayofObj = [
    {
      name: 'RJ',
      subject: ['bangla', 'english'],
    },
    {
      name: 'Tj',
      subject: ['math', 'english'],
    },
  ];

  // Usage in another file
const intersection:Status1= {
    name: 'tj',
    age: 10,
    subject:"error"
  };

  let justUnionData = {
    name: 's',
    age:12
   
  };
  return (
    <View>
      //primative
      <Child1 name={'12'} />
      //function
      <FunctionProps name="Tj" displayConsole={display} />
      //Array
      <ArrayProps subject={['bangla', 'english']} />
      //Object
      <ObjectProps details={Object1} />
      //Array of ObjectProps
      <ArrayOfObject theArrayOfObj={myArrayofObj} />
      //Union
        <Union obj={intersection}/>
      //just Union
      <JustUnion data={justUnionData} />
    </View>
  );
}
