const graphql = require('graphql');
const _= require('lodash');
const Class = require('../models/clas');
const Schedule = require('../models/schedule');


const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList
} = graphql;
/*Dummy Data
var classes = [
    {
        name: 'Level 1: Ages (4-5)', subject: 'Islamic Studies', description: `
        'To be able to identify who is Allah, Mohamed, and the Quran.',
        'Know the Shihadah',
        'Names of the five pillars of Islam','Names of the Five Prayers' 
        `, 
        id:'1',
        scheduleidw:'17',
        scheduleids:'18'
    },
    {
        name: 'Level 1: Ages (4-5)', 
        subject: 'Arabic',
        description: `
        'Reading and Writing the Arabic Alphabet and short vowels',
        'Know some Arabic introductory words.'
        `, 
        id:'2',
        scheduleidw:'17',
        scheduleids:'18'
    },
    {
        name: 'Level 1: Ages (4-5)', 
        subject: 'Quran',
        description: `
            'Reading and Writing the Arabic Alphabet and short vowels',
            'Know some Arabic introductory words.'
            `, 
        id:'3',
        scheduleidw:'17',
        scheduleids:'18'
    },
    {
        name: 'Level 2: Ages (5-7)',
        subject: 'Islamic Studies',
        description: `
            'Memorizing and teachings of salat timings, wudu, azaan, and how to pray.',
            'Know the 5 pillars of Islam',
            'Know the 6 pillars of Iman',
            'Seerah of some prophets ',
            'Childhood stories of prophet Mohamed'
            `, 
         id:'4',
         scheduleidw:'19',
         scheduleids:'20'
    },
    {
        name: 'Level 2: Ages (5-7)', 
        subject: 'Arabic',
        description: `
            'Reading and writing fattha, kasra, dama, and introduction of tanween basics.',
            'Reading and writing simple words '
            `, 
        id:'5',
        scheduleidw:'19',
        scheduleids:'20'
    },
    {
        name: 'Level 2: Ages (5-7)',
        subject: 'Quran', 
        description: `
            'Memorize from Surat Al-Fatiha to Al-Zalzalah.'`
            ,
        id:'6',
        scheduleidw:'19',
        scheduleids:'20'
    },
    {
        name: 'Level 3: Ages (8-11)',
        subject: 'Islamic Studies',
        description:`
            'Know the 5 pillars of Islam, Know the 6 pillars of Iman','Memorizing and teachings of salat timings, wudu, azaan, and how to pray.',
            'Seerah of some prophets', 
            'Life of prophet Mohamed',
            'Memorize some Quranic Duas', 
            'Manners for eating, sleeping, bathroom',
            'Hadiths to teach morals',
            'Behavior towards parents, elderly, younger people, strangers.',
            'Repeat rules of taharah: najasah, ghusl, Tayammum.',
            'Respecting the Masjid'
            `, 
        id:'7',
        scheduleidw:'21',
        scheduleids:'22'
    },
    {
        name: 'Level 3: Ages (8-11)', 
        subject: 'Arabic',
        description: `
            'Reading and writing fattha, kasra, dama, and introduction of tanween basics.',
            'Reading and writing simple words'
            `, 
         id:'8',
         scheduleidw:'21',
         scheduleids:'22'
    },
    {
        name: 'Level 3: Ages (8-11)', 
        subject: 'Quran',
        description: `
           'Memorize from Surat Al-Fatiha to Al-Zalzalah.'
            `,
            id:'9',
            scheduleidw:'21',
            scheduleids:'22'
    },
    {
        name: 'Level 4: Ages (12-14)', 
        subject: 'Islamic Studies', 
        description: `
            'Seerah of some prophets',
            'Life of prophet Mohamed',
            'Memorize some Quranic Duas',
            'Manners for eating, sleeping, bathroom',
            'Hadiths to teach morals',
            'Significance of zakat, siyam, and the rules pertaining to them',
            'Behavior towards parents, elderly, younger people, strangers.',
            'Repeat rules of taharah: najasah, ghusl, Tayammum.',
            'Kindness, Honesty, Truthfulness, Patience, Generosity',
            'Discussion of bad habits ( Slander, Backbiting, Destructive habits',
            'Prophet Mohamed as a model in leadership, tolerance, forgiveness, treatment of children, Muslims, Non-Muslims.' 
            `, 
            id:'10',
            scheduleidw:'23',
            scheduleids:'24'
    },
    {
        name: 'Level 4: Ages (12-14)',
        subject: 'Arabic', 
        description: 
        `, 
        id:'11',
        scheduleidw:'23',
        scheduleids:'24'
    },
    {
        name: 'Level 4: Ages (12-14)', 
        subject: 'Quran', 
            `, 
        id:'12',
        scheduleidw:'23',
        scheduleids:'24'
    },
    {
name: 'Level 5 & 6: (Ages 14 & Up)',subject: 'Islamic Studies', 
"'Seerah of some prophets.', 'Life of prophet Mohamed.', 'Memorize some Quranic Duas.', 'Manners for eating, sleeping, bathroom.', 'Hadiths to teach morals.', 'Significance of zakat, siyam, and the rules pertaining to them.', 'Behavior towards parents, elderly, younger people, strangers.', 'Repeat rules of taharah: najasah, ghusl, Tayammum.', 'Kindness, Honesty, Truthfulness, Patience, Generosity.',
            
            
            
            

            `, 
        id:'13',
        scheduleidw:'25',
        scheduleids:'26'
    },
    {
        name: 'Level 5 & 6: (Ages 14 & Up)',subject: 'Arabic', 
        description: `
            
            `, 
        id:'14',
        scheduleidw:'25',
        scheduleids:'26'
    },
        {
            name: 'Level 5 & 6: (Ages 14 & Up)', 
            subject: 'Quran', 

  
            id:'15',
            scheduleidw:'25',
            scheduleids:'26'
        }
];

var schedules = [
    {
        name: 'Level 1', 
        ages:'4-5', 
        semester:'Winter: (December 1st - March 1st)', 
        time:'10:00 AM - 2:00 PM', cost:'$40', 
        openslots:30, 
        id:'17'
    },
    {
        name: 'Level 1', 
        ages:'4,5', 
        semester:'Summer: (November 1st - April 1st)', 
        time:'10:00 AM - 2:00 PM', 
        cost:'$40', 
        openslots:30, 
        id:'18'
    },
    {
        name: 'Level 2', 
        ages:'5,6,7', 
        semester:'Winter: (December 1st - March 1st)', 
        time:'10:00 AM - 2:00 PM', cost:'$40', 
        openslots:30, 
        id:'19'
    },
    {
        name: 'Level 2', 
        ages:'5,6,7',
        semester:'Summer: (November 1st - April 1st)', 
        time:'10:00 AM - 2:00 PM', cost:'$40', 
        openslots:30, 
        id:'20'
    },
    {
        name: 'Level 3', 
        ages:'8,9,10,11', 
        semester:'Winter: (December 1st - March 1st)', 
        time:'10:00 AM - 2:00 PM', cost:'$40', 
        openslots:30, 
        id:'21'
    },
    {
        name: 'Level 3', 
        ages:'8,9,10,11', 
        semester:'Summer: (November 1st - April 1st)', 
        time:'10:00 AM - 2:00 PM', cost:'$40', 
        openslots:30, 
        id:'22'
    },
    {
        name: 'Level 4', 
        ages:'12,13,14',
        semester:'Winter: (December 1st - March 1st)', 
        time:'10:00 AM - 2:00 PM', cost:'$40', 
        openslots:30, 
        id:'23'
    },
    {
        name: 'Level 4', 
        ages:'12,13,14', 
        semester:'Summer: (November 1st - April 1st)', 
        time:'10:00 AM - 2:00 PM', cost:'$40', 
        openslots:30, 
        id:'24'
    },
    {
        name: 'Level 5 & 6', 
        ages:'14,15,16,17', semester:'Winter: (December 1st - March 1st)', 
        time:'10:00 AM - 2:00 PM', cost:'$40', 
        openslots:30, 
        id:'25'
    },
    {
        name: 'Level 5 & 6', 
        ages:'14,15,16,17', semester:'Summer: (November 1st - April 1st)', 
        time:'10:00 AM - 2:00 PM', cost:'$40', 
        openslots:30, 
        id:'26'
    }
];*/

const ScheduleType = new GraphQLObjectType({
    name:'Schedule',
    fields:() => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        ages: { type: GraphQLString },
        semester: { type: GraphQLString },
        time: { type: GraphQLString },
        cost: { type: GraphQLString },
        openslots: {type: GraphQLInt },
        clas:{
            type: new GraphQLList(ClassType),
            resolve(parent,args){
                return Schedule.find(parent.scheduleId);
            }
        }
    })
});

const ClassType = new GraphQLObjectType({
    name:'Class',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        subject: { type: GraphQLString },
        description: { type: GraphQLString },
        schedule: {
            type: ScheduleType,
            resolve(parent, args){
                return Class.findById({scheduleId:parent.id});
            }
        }   
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        clas: {
            type: ClassType,
            args: { id: { type: GraphQLID }},
            resolve(parent,args){
              return Class.findById(args.id);
            }
        },
        schedule: {
            type: ScheduleType,
            args: { id: { type: GraphQLID }},
            resolve(parent,args){
                return Schedule.findById(args.id);
            }
        },
        classes:{
            type: new GraphQLList(ClassType),
            resolve(parent,args){
              return Class.find({});
            }
        },
        schedules:{
            type: new GraphQLList(ScheduleType),
            resolve(parent,args){
                return Schedule.find({});
            }
        } 
}});

const Mutation = new GraphQLObjectType({
    name:'Mutation',
    fields:{
        addSchedule: {
            type: ScheduleType,
            args:{
                name:{ type: GraphQLString },
                ages:{ type: GraphQLString },
                semester:{ type: GraphQLString },
                time:{ type: GraphQLString },
                cost:{ type: GraphQLString },
                openslots:{ type: GraphQLInt }
            },
            resolve(parent,args){
                let schedule = new Schedule({
                    name: args.name,
                    ages: args.ages,
                    semester: args.semester,
                    time: args.time,
                    cost: args.cost,
                    openslots: args.openslots
                });
                return schedule.save();
            }
        },
        addClass: {
            type: ClassType,
            args:{
                name:{ type: GraphQLString },
                subject:{ type: GraphQLString },
                description:{ type: GraphQLString },
                scheduleId:{ type: GraphQLID }
            },
            resolve(parent,args){
                let clas= new Class({
                    name: args.name,
                    subject: args.subject,
                    description: args.description,
                    scheduleId: args.scheduleId
                });
                return clas.save();
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
