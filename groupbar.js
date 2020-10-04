am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_spiritedaway);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    var chart = am4core.create("groupbar", am4charts.XYChart);

    // Add data
    chart.data = [{
            "Date": "Aug 31st",
            "Meal": "8/31 Breakfast",
            "Food": "oatmeal, milk",
            "Duration": 10,
            "Type": "instant food",
            "Flavors": ["sweet", "salty"]
        },
        {
            "Date": "Aug 31st",
            "Meal": "8/31 Lunch",
            "Food": "cabbage, tofu",
            "Duration": 17,
            "Type": "self cooked",
            "Flavors": ["salty"]
        },
        {
            "Date": "Aug 31st",
            "Meal": "8/31 Dinner",
            "Food": "beef, curry, carrot",
            "Duration": 39,
            "Type": "self cooked",
            "Flavors": ["salty", "spicy"]
        },
        {
            "Date": "Sept 1st",
            "Meal": "9/1 Breakfast",
            "Food": "banana",
            "Duration": 5,
            "Type": "instant food",
            "Flavors": ["sweet"]
        },
        {
            "Date": "Sept 1st",
            "Meal": "9/1 Lunch",
            "Food": "noodle, beef",
            "Duration": 10,
            "Type": "delivery",
            "Flavors": ["sour", "salty"]
        },
        {
            "Date": "Sept 1st",
            "Meal": "9/1 Dinner",
            "Food": "beef, curry, carrot, onion",
            "Duration": 31,
            "Type": "self cooked",
            "Flavors": ["salty", "spicy"]
        },
        {
            "Date": "Sept 2nd",
            "Meal": "9/2 Breakfast",
            "Food": "curry puff",
            "Duration": 8,
            "Type": "instant food",
            "Flavors": ["salty", "sweet"]
        },
        {
            "Date": "Sept 2nd",
            "Meal": "9/2 Dinner",
            "Food": "dumpling",
            "Duration": 21,
            "Type": "instant food",
            "Flavors": ["salty", "spicy", "sour"]
        },
        {
            "Date": "Sept 3rd",
            "Meal": "9/3 Breakfast",
            "Food": "oatmeal, milk, egg",
            "Duration": 15,
            "Type": "instant food",
            "Flavors": ["sweet"]
        },
        {
            "Date": "Sept 3rd",
            "Meal": "9/3 Lunch",
            "Food": "beef, pork, tofu, broccoli",
            "Duration": 31,
            "Type": "delivery",
            "Flavors": ["salty", "spicy"]
        },
        {
            "Date": "Sept 3rd",
            "Meal": "9/3 Dinner",
            "Food": "tuna bagel",
            "Duration": 22,
            "Type": "delievery",
            "Flavors": ["sour", "spicy"]
        },
        {
            "Date": "Sept 4th",
            "Meal": "9/4 Breakfast",
            "Food": "tuna bagel",
            "Duration": 12,
            "Type": "instant food",
            "Flavors": ["sour", "spicy"]
        },
        {
            "Date": "Sept 4th",
            "Meal": "9/4 Lunch",
            "Food": "egg, noodle, cabbage",
            "Duration": 21,
            "Type": "self cooked",
            "Flavors": ["sour", "spicy"]
        },
        {
            "Date": "Sept 4th",
            "Meal": "9/4 Dinner",
            "Food": "chicken, bubble tea",
            "Duration": 11,
            "Type": "delivery",
            "Flavors": ["sweet", "salty"]
        },
        {
            "Date": "Sept 5th",
            "Meal": "9/5 Lunch",
            "Food": "rice noodle, beef, scallop",
            "Duration": 29,
            "Type": "delivery",
            "Flavors": ["salty", "spicy"]
        },
        {
            "Date": "Sept 5th",
            "Meal": "9/5 Dinner",
            "Food": "hot pot sauce, cabbage, beef, fish ball",
            "Duration": 91,
            "Type": "self cooked",
            "Flavors": ["salty", "spicy", "sour"]
        },
        {
            "Date": "Sept 6th",
            "Meal": "9/6 Lunch",
            "Food": "pork, cabbage",
            "Duration": 31,
            "Type": "self cooked",
            "Flavors": ["salty", "spicy"]
        },
        {
            "Date": "Sept 6th",
            "Meal": "9/6 Dinner",
            "Food": "bubble tea",
            "Duration": 10,
            "Type": "delivery",
            "Flavors": ["sweet"]
        },
        {
            "Date": "Sept 7th",
            "Meal": "9/7 Breakfast",
            "Food": "milk",
            "Duration": 5,
            "Type": "instant food",
            "Flavors": ["sweet","hardToDescribe"]
        },
        {
            "Date": "Sept 7th",
            "Meal": "9/7 Lunch",
            "Food": "fish, tofu, bamboo shoots, pork",
            "Duration": 27,
            "Type": "delivery",
            "Flavors": ["sour", "spicy"]
        },
        {
            "Date": "Sept 7th",
            "Meal": "9/7 Dinner",
            "Food": "noodle,cabbage",
            "Duration": 21,
            "Type": "self cooked",
            "Flavors": ["sour", "spicy"]
        },
        {
            "Date": "Sept 8th",
            "Meal": "9/8 Breakfast",
            "Food": "dumplings",
            "Duration": 15,
            "Type": "instant food",
            "Flavors": ["salty", "sweet"]
        },
        {
            "Date": "Sept 8th",
            "Meal": "9/8 Lunch",
            "Food": "beef, curry, carrot, onion",
            "Duration": 31,
            "Type": "instant food",
            "Flavors": ["salty", "spicy"]
        },
        {
            "Date": "Sept 8th",
            "Meal": "9/8 Dinner",
            "Food": "cabbage, noodle",
            "Duration": 27,
            "Type": "self cooked",
            "Flavors": ["sour", "spicy"]
        }
    ];

    // Create axes
    var yAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    yAxis.height = 100;
    yAxis.dataFields.category = "Meal";
    yAxis.renderer.grid.template.location = 0;
    yAxis.renderer.labels.template.fontSize = 20;
    yAxis.renderer.minGridDistance = 10;

    var xAxis = chart.xAxes.push(new am4charts.ValueAxis());

    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.stacked = true;
    series.dataFields.valueX = "Duration";
    series.dataFields.categoryY = "Meal";
    series.dataFields.content = "Food";
    series.columns.template.tooltipText = "{categoryY}: {content}, [bold]{valueX}mins[/]";
    series.columns.template.strokeWidth = 0;

    series.columns.template.adapter.add("fill", function(fill, target) {
        let gradient = new am4core.LinearGradient();
        target.dataItem.dataContext.Flavors.forEach(function(flavor) {
            switch (flavor) {
                case "sour":
                    gradient.addColor(am4core.color("#E46B39"), 0.8);
                    break;
                case "sweet":
                    gradient.addColor(am4core.color("#F5C744"), 0.8);
                    break;
                case "spicy":
                    gradient.addColor(am4core.color("#B14D76"), 0.8);
                    break;
                case "salty":
                    gradient.addColor(am4core.color("#3F674B"), 0.8);
                    break;
                case "hardToDescribe":
                    gradient.addColor(am4core.color("#5DA9C7"), 0.8);
            }
        });
        return gradient;
    });

    var axisBreaks = {};
    var legendData = [];
    /*
        // Add ranges
        function addRange(label, start, end, color) {
            var range = yAxis.axisRanges.create();
            range.date = start;
            range.endDate = end;
            range.label.text = label;
            range.label.disabled = false;
            range.label.fill = color;
            range.label.location = 0;
            range.label.dx = -130;
            range.label.dy = 12;
            range.label.fontWeight = "bold";
            range.label.fontSize = 12;
            range.label.horizontalCenter = "left"
            range.label.inside = true;

            range.grid.stroke = am4core.color("#396478");
            range.grid.strokeOpacity = 1;
            range.tick.length = 200;
            range.tick.disabled = false;
            range.tick.strokeOpacity = 0.6;
            range.tick.stroke = am4core.color("#396478");
            range.tick.location = 0;

            range.locations.category = 1;
            var axisBreak = yAxis.axisBreaks.create();
            axisBreak.startCategory = start;
            axisBreak.endCategory = end;
            axisBreak.breakSize = 1;
            axisBreak.fillShape.disabled = true;
            axisBreak.startLine.disabled = true;
            axisBreak.endLine.disabled = true;
            axisBreaks[label] = axisBreak;

            legendData.push({ name: label, fill: color });
        }
    
    addRange("Aug 31st", "8/31 Breakfast", "8/31 Dinner", chart.colors.getIndex(0));
    addRange("Sept 1st", "9/1 Breakfast", "9/1 Dinner", chart.colors.getIndex(1));
    addRange("Sept 2nd", "9/2 Breakfast", "9/2 Dinner", chart.colors.getIndex(2));
    addRange("Sept 3rd", "9/3 Breakfast", "9/3 Dinner", chart.colors.getIndex(3));
    addRange("Sept 4th", "9/4 Breakfast", "9/4 Dinner", chart.colors.getIndex(4));
    addRange("Sept 5th", "9/5 Lunch", "9/5 Dinner", chart.colors.getIndex(5));
    addRange("Sept 6th", "9/6 Lunch", "9/6 Dinner", chart.colors.getIndex(6));
    addRange("Sept 7th", "9/7 Breakfast", "9/7 Dinner", chart.colors.getIndex(7));
    addRange("Sept 8th", "9/8 Breakfast", "9/8 Dinner", chart.colors.getIndex(8));
    /*
    //addRange("Breakfast", "Aug 31st", "Sept 1st", chart.colors.getIndex(0));
    //addRange("Lunch", "Aug 31st", "Sept 8th", chart.colors.getIndex(8));
    //addRange("Dinner", "Aug 31st", "Sept 8th", chart.colors.getIndex(8));
    */

    chart.cursor = new am4charts.XYCursor();

    var legend = new am4charts.Legend();
    legend.position = "right";
    legend.scrollable = true;
    legend.valign = "top";
    legend.reverseOrder = true;

    chart.legend = legend;
    legend.data = legendData;

    legend.itemContainers.template.events.on("toggled", function(event) {
        var name = event.target.dataItem.dataContext.name;
        var axisBreak = axisBreaks[name];
        if (event.target.isActive) {
            axisBreak.animate({ property: "breakSize", to: 0 }, 1000, am4core.ease.cubicOut);
            yAxis.dataItems.each(function(dataItem) {
                if (dataItem.dataContext.region == name) {
                    dataItem.hide(1000, 500);
                }
            })
            series.dataItems.each(function(dataItem) {
                if (dataItem.dataContext.region == name) {
                    dataItem.hide(1000, 0, 0, ["valueX"]);
                }
            })
        } else {
            axisBreak.animate({ property: "breakSize", to: 1 }, 1000, am4core.ease.cubicOut);
            yAxis.dataItems.each(function(dataItem) {
                if (dataItem.dataContext.region == name) {
                    dataItem.show(1000);
                }
            })

            series.dataItems.each(function(dataItem) {
                if (dataItem.dataContext.region == name) {
                    dataItem.show(1000, 0, ["valueX"]);
                }
            })
        }
    })
// data credit label
var creditLabel = chart.chartContainer.createChild(am4core.TextLink);
creditLabel.text = "Data source: personal data tracking";
creditLabel.url = "https://docs.google.com/spreadsheets/d/1rSRXCI_31VNGeu5Dp2xzU_Gzm1gb--bdyyNXUN0ANEg/edit?usp=sharing";
creditLabel.y = am4core.percent(99);
creditLabel.x = am4core.percent(99);
creditLabel.horizontalCenter = "right";
creditLabel.verticalCenter = "bottom";
}); // end am4core.ready()