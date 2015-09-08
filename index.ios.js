'use strict';

var React = require('react-native');
var SearchPage = require('./SearchPage');

var styles = React.StyleSheet.create({
  container: {
    flex: 1
  }
});

class PropertyFinderApp extends React.Component {
  render() {
    return (
      <React.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/>
    );
  }
}

//class HelloWorld extends React.Component {
//  render() {
//    return <React.Text style={styles.text}>Hello World (Again)</React.Text>;
//  }
//}

//var sqlite = require('react-native-sqlite');

//sqlite.open("my_first_db.sqlite", function (error, database) {
//  database.executeSQL(
//    "INSERT INTO t1 (first, last) VALUES ('John',?)",
//    [(new Date()).toString()], 
//    null, 
//    completeCallback);
//
//  function completeCallback(error) {
//    if (error) {
//      console.log("[write] Failed to execute query:", error);
//      return
//    }
//    console.log("[write] Query complete!");
//    database.close(function (error) {
//      if (error) {
//        console.log("[write] Failed to close database:", error);
//        return
//      }
//    });
//  }
//})

//sqlite.open("my_first_db.sqlite", function (error, database) {
//  if (error) {
//    console.log("Failed to open database:", error);
//    return;
//  }
//  database.executeSQL(
//    "SELECT first, last FROM t1", 
//    [], 
//    rowCallback, 
//    completeCallback);
//
//  function rowCallback(rowData) {
//    console.log("Got data:", rowData);
//  }
//  function completeCallback(error) {
//    if (error) {
//      console.log("Failed to execute query:", error);
//      return
//    }
//    console.log("Query complete!");
//    database.close(function (error) {
//      if (error) {
//        console.log("Failed to close database:", error);
//        return
//      }
//    });
//  }
//})

React.AppRegistry.registerComponent('PropertyFinder',
                                    function() { return PropertyFinderApp });

