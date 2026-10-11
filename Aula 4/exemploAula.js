import * as d3 from 'https://cdn.jsdelivr.net/npm/d3@7/+esm'

var myData = ['A','B','C','D','E']

function atualiza1(){
    var u = d3.select('body')
                .selectAll('p')
                .data(myData)
    u.enter().append('p')
    u.text(d => d)
}
window.atualiza1 = atualiza1

function atualiza2(){
    var u = d3.select('body')
                .selectAll('p')
                .data(myData)
    u = u.enter()
    u.append('p')
        .text(d => d)
}
window.atualiza2 = atualiza2

function atualiza3(){
    var u = d3.select('body')
                .selectAll('p')
                .data(myData)
    u.enter().append('p')
    u = d3.select('body')
            .selectAll('p')
            .text(d => d)
}
window.atualiza3 = atualiza3

function atualiza4(){
    var u = d3.select('body')
                .selectAll('p')
                .data(myData)
    u = u.enter().append('p').merge(u)
    u.text(d => d)
}
window.atualiza4 = atualiza4

function atualiza5(){
    var reducedData = ['A']
    var u = d3.select('body')
                .selectAll('p')
                .data(reducedData)
    u.text(d => d)
    u.exit().remove()
}
window.atualiza5 = atualiza5

function atualiza(dados){
    var sel = d3.select('body')
                .selectAll('p')
                .data(dados)
    sel.enter()
        .append('p')
        .merge(sel)
        .text(d => d)
    
    sel.exit().remove()
}
window.atualiza = atualiza