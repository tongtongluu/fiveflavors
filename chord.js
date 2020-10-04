am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create("chord", am4charts.ChordDiagram);

    // colors of main characters
    chart.colors.saturation = 0.45;
    chart.colors.step = 3;

    var colors = {
        sweety: am4core.color("#F5C744"),
        salty: am4core.color("#3F674B"),
        spicy: am4core.color("#B14D76"),
        sour: am4core.color("#E46B39"),
        hardToDescribe: am4core.color("#5DA9C7"),
    }


    chart.data = [
        // node property fields take data from data items where they are first mentioned, that's 
        // why we add empty data items at the beginning and set colors here
        { "from": "sweety", "color": colors.sweety },
        { "from": "salty", "color": colors.salty },
        { "from": "spicy", "color": colors.spicy },
        { "from": "sour", "color": colors.sour },
        { "from": "hardToDescribe", "color": colors.hardToDescribe },


        // real data
        //0831
        { from: "sweety", to: "sweety", value: 10, date: "Aug.31st", meal: "breakfast" },
        { from: "salty", to: "salty", value: 17, date: "Aug.31st", meal: "lunch" },
        { from: "spicy", to: "salty", value: 39, kind: 1, date: "Aug.31st", meal: "dinner" },
        //0901
        { from: "sweety", to: "sweety", value: 4, kind: 1, date: "Sept.1st", meal: "breakfast" },
        { from: "spicy", to: "salty", value: 10, kind: 1, date: "Sept.1st", meal: "lunch" },
        { from: "spicy", to: "salty", value: 17, kind: 1, date: "Sept.1st", meal: "dinner" },
        //0902
        { from: "sweety", to: "salty", value: 18, kind: 1, date: "Sept.2nd", meal: "lunch" },
        { from: "sour", to: "salty", value: 20, kind: 1, date: "Sept.2nd", meal: "dinner" },
        //0903
        { from: "sweety", to: "sweety", value: 10, kind: 1, date: "Sept.3rd", meal: "breakfast" },
        { from: "sour", to: "spicy", value: 38, kind: 1, date: "Sept.3rd", meal: "lunch" },
        { from: "salty", to: "salty", value: 17, kind: 1, date: "Sept.3rd", meal: "dinner" },
        //0904
        { from: "salty", to: "salty", value: 10, kind: 1, date: "Sept.4th", meal: "breakfast" },
        { from: "sour", to: "spicy", value: 19, kind: 1, date: "Sept.4th", meal: "lunch" },
        { from: "salty", to: "sweety", value: 24, kind: 1, date: "Sept.4th", meal: "dinner" },
        //0905
        { from: "sour", to: "spicy", value: 29, kind: 1, date: "Sept.5th", meal: "lunch" },
        { from: "spicy", to: "spicy", value: 50, kind: 1, date: "Sept.5th", meal: "dinner" },
        //0906
        { from: "sour", to: "salty", value: 25, kind: 1, date: "Sept.6th", meal: "breakfast" },
        { from: "sweety", to: "sweety", value: 5, kind: 1, date: "Sept.6th", meal: "lunch" },
        { from: "sour", to: "spicy", value: 18, kind: 1, date: "Sept.6th", meal: "dinner" },
        //0907
        { from: "sweety", to: "hardToDescribe", value: 5, kind: 1, date: "Sept.7th", meal: "breakfast" },
        { from: "sour", to: "spicy", value: 15, kind: 1, date: "Sept.7th", meal: "lunch" },
        { from: "spicy", to: "spicy", value: 18, kind: 1, date: "Sept.7th", meal: "dinner" },
        //0908
        { from: "sweety", to: "salty", value: 8, kind: 1, date: "Sept.8th", meal: "breakfast" },
        { from: "sour", to: "spicy", value: 33, kind: 1, date: "Sept.8th", meal: "lunch" },

        { from: "sour", to: "spicy", value: 21, kind: 1, date: "Sept.8th", meal: "dinner" },

    ];

    chart.dataFields.fromName = "from";
    chart.dataFields.toName = "to";
    chart.dataFields.value = "value";


    chart.nodePadding = 5;
    chart.minNodeSize = 0.01;
    chart.startAngle = 180;
    chart.endAngle = chart.startAngle + 360;
    chart.sortBy = "value";
    chart.fontSize = 24;
    chart.font = "Nanum Pen";

    var nodeTemplate = chart.nodes.template;
    nodeTemplate.readerTitle = "Click to show/hide or drag to rearrange";
    nodeTemplate.showSystemTooltip = true;
    nodeTemplate.propertyFields.fill = "color";
    nodeTemplate.tooltipText = "{name} flavor mixed {total} minutes with others flavors";

    // when rolled over the node, make all the links rolled-over
    nodeTemplate.events.on("over", function(event) {
        var node = event.target;
        node.outgoingDataItems.each(function(dataItem) {
            if (dataItem.toNode) {
                dataItem.link.isHover = true;
                dataItem.toNode.label.isHover = true;
            }
        })
        node.incomingDataItems.each(function(dataItem) {
            if (dataItem.fromNode) {
                dataItem.link.isHover = true;
                dataItem.fromNode.label.isHover = true;
            }
        })

        node.label.isHover = true;
    })

    // when rolled out from the node, make all the links rolled-out
    nodeTemplate.events.on("out", function(event) {
        var node = event.target;
        node.outgoingDataItems.each(function(dataItem) {
            if (dataItem.toNode) {
                dataItem.link.isHover = false;
                dataItem.toNode.label.isHover = false;
            }
        })
        node.incomingDataItems.each(function(dataItem) {
            if (dataItem.fromNode) {
                dataItem.link.isHover = false;
                dataItem.fromNode.label.isHover = false;
            }
        })

        node.label.isHover = false;
    })

    var label = nodeTemplate.label;
    label.relativeRotation = 90;

    label.fillOpacity = 0.4;
    let labelHS = label.states.create("hover");
    labelHS.properties.fillOpacity = 1;

    nodeTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;
    // this adapter makes non-main character nodes to be filled with color of the main character which he/she kissed most
    nodeTemplate.adapter.add("fill", function(fill, target) {
        let node = target;
        let counters = {};
        let mainChar = false;
        node.incomingDataItems.each(function(dataItem) {
            if (colors[dataItem.toName]) {
                mainChar = true;
            }

            if (isNaN(counters[dataItem.fromName])) {
                counters[dataItem.fromName] = dataItem.value;
            } else {
                counters[dataItem.fromName] += dataItem.value;
            }
        })
        if (mainChar) {
            return fill;
        }

        let count = 0;
        let color;
        let biggest = 0;
        let biggestName;

        for (var name in counters) {
            if (counters[name] > biggest) {
                biggestName = name;
                biggest = counters[name];
            }
        }
        if (colors[biggestName]) {
            fill = colors[biggestName];
        }

        return fill;
    })

    // link template
    var linkTemplate = chart.links.template;
    linkTemplate.strokeOpacity = 0;
    linkTemplate.fillOpacity = 0.15;
    linkTemplate.tooltipText = "on {date}: flavor {fromName} and {toName} coexisted for {value.value}minutes when having {meal}";

    var hoverState = linkTemplate.states.create("hover");
    hoverState.properties.fillOpacity = 0.7;
    hoverState.properties.strokeOpacity = 0.7;

    // data credit label
    var creditLabel = chart.chartContainer.createChild(am4core.TextLink);
    creditLabel.text = "Data source: personal data tracking";
    creditLabel.url = "https://docs.google.com/spreadsheets/d/1rSRXCI_31VNGeu5Dp2xzU_Gzm1gb--bdyyNXUN0ANEg/edit?usp=sharing";
    creditLabel.y = am4core.percent(99);
    creditLabel.x = am4core.percent(99);
    creditLabel.horizontalCenter = "right";
    creditLabel.verticalCenter = "bottom";

    // var titleImage = chart.chartContainer.createChild(am4core.Image);
    // titleImage.href = "//www.amcharts.com/wp-content/uploads/2018/11/whokissed.png";
    // titleImage.x = 30
    // titleImage.y = 30;
    // titleImage.width = 200;
    // titleImage.height = 200;

}); // end am4core.ready()