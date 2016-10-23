/**
 * Created by Amulya on 23/10/2016.
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {

    var number=[];
    for(var i =0; i<s.length;++i){
        if(i+p.length>s.length)
            break;

        test=s.substring(i,i+p.length);

        if(equality(plotF(p),plotF(test)))
            number.push(i);
    }

    return number;

};

var plotF= function(s){

    freq={};
    for(var i=0;i<s.length;++i){
        if(freq[s.charAt(i)])
            freq[s.charAt(i)]++;
        else
            freq[s.charAt(i)]=1;
    }

    return freq;

};

var equality=function(obj1,obj2){

    values1=Object.getOwnPropertyNames(obj1);
    values2=Object.getOwnPropertyNames(obj2);

    if(values1.length!=values2.length) return false;

    //now values1 and values2 are of same length. so check for value
    for(i=0;i<values1.length;++i){
        if(obj1[values1[i]]!=obj2[values1[i]])
            return false;
    }

    return true;
};