function clause(func, parameter) {
    //assert func and parameter are strings
    return `${func} ${parameter} `;
}

function aggregate(func, parameter) {
    return `${func}(${parameter}) `;
}

const select = (param) =>  clause('SELECT', param);
const from = (param) => clause('FROM', param);
const where = (param) =>  clause('WHERE', param);
const like = (param) =>  clause('LIKE', param);
const innerJoin = (param) => clause('INNER JOIN', param);
const on = (param) => clause('ON', param);
const count = (param) => aggregate('COUNT', param);

function query(...args) {
    //assert all args are functions
    return args.reduce((arg1, arg2) => arg1 + arg2).trim();
}

console.log(
    query(
        select('id, name, region'),
        from('cities'),
        innerJoin('regions'),
        on('regions.name = cities.region'),
        where('id = 0')
    )
);