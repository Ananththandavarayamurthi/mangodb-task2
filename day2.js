zenclass = [
    {
            "id": 1,
            "name": "Ananth",
            "Batch": "b39wd",
            "month":"october",
            "task":"notsubmitted",
            "Codekata": 28,
            "Attendance": "Present",
            "Date":new Date("2022-10-16"),
            "tasks" : "react reducer,react context, react Crud",
            "topics":"javascript, Array, Objects,react",
            "companydrive" : {
                    "zoho":"product based company",
                    "Accenture":"IT company",
                    "techpark":"service based company",
                    "date":new Date("2022-10-30")
                },
                "placement":{
                    "student1":"anant",
                    "student2":"rajkumar",
                    "student3":"suresh"
                },
                "mentors":{
                    "name":"Ragav Kumar",
                    "count":30
                },

    },
    {
        "id": 2,
        "name": "Ashok",
        "Batch": "b39wd",
        "month":"october",
        "task":"submitted",
        "Attendance": "Absent",
        "Date":new Date("2022-10-21"),
        "Codekata": 50,
        "tasks" : "react reducer,react context, react Crud",
        "topics":"javascript, Array, Objects,react",
        "companydrive" : {
                "zoho":"product based company",
                "Accenture":"IT company",
                "techpark":"service based company",
                "date":new Date("2022-10-20")
            },
            "placement":{
                "student1":"anant",
                "student2":"rajkumar",
                "student3":"suresh"
            },
            "mentors":{
                "name":"Deepika",
                "count":24
            },

},

{
    "id": 3,
    "name": "Rajkumar",
    "Batch": "b39wd",
    "month":"october",
    "task":"notsubmitted",
    "Attendance": "Present",
    "Date":new Date("2022-10-31"),
    "Codekata": 23,
    "tasks" : "react reducer,react context, react Crud",
    "topics":"javascript, Array, Objects,react",
    "companydrive" : {
            "zoho":"product based company",
            "Accenture":"IT company",
            "techpark":"service based company",
            "date":new Date("2022-10-15")
        },
    "placement":{
        "student1":"anant",
        "student2":"rajkumar",
        "student3":"suresh"
    },
        "mentors":{
            "name":"farook jinth",
            "count":12
        },

}
]


// 1. Find all the topics and tasks which are thought in the month of October
db.zenclass.find(
    {month:{$eq : "october"}},
{_id:0,tasks:1,topics:1}
)
// 2. Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
      db.zenclass.find(
        {Task:{$eq:"Not Submitted"}},
        {_id:0,Task:1,name:1})
      db.zenclass.find(
        {$and:[ { Task:{$eq:"Not Submitted"} },
        { Attendance:{$eq:"Absent"} },{date:{$gt: ISODate("2022-10-15"),
      $lt: ISODate("2022-10-31")}} ] }).count()
// 3. Find the number of problems solved by the user in codekata
db.zenclass.find({},{_id:0,Codekata:1,name:1})

// 4. Find all the mentors with who has the mentee's count more than 15

db.zenclass.find({"mentors.count":{$gt:15}},{_id:0,mentors:1})

//5.  Find all the company drives and students who are appeared for the placement

db.zen.find({},{_id:0,companydrive:1,placement:1})

// 6. Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.zenclass.find({"companydrive.date":{$gt: ISODate("2022-10-15"),
$lt: ISODate("2022-10-31")}},{_id:0,companydrive:1})
