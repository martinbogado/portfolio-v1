export default{
    name:'skills',
    title:'Skills',
    type: 'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name: 'type',
            title: 'Type', 
            type: 'string',
            options: {
              list: [
                { title: 'Frontend', value: 'frontend' },
                { title: 'Backend', value: 'backend' },
                { title: 'Tools', value: 'tools' },
                { title: 'Blockchain', value: 'blockchain' },
              ],
            },
        },
        {
            name:'bgColor',
            title:'BgColor',
            type:'string'
        },
        {
            name:'icon',
            title:'Icon',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
}