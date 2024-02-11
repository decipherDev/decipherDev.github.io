(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{454:function(t,s,a){"use strict";a.r(s);var m=a(17),e=function(t){t.options.__data__block__={mermaid_382ee1e8:"graph TD\n  1([Bottom of the Staircase])--+1--\x3e 2([1 out of 1]);\n  1--+2--\x3e 3([2 out of 1]);\n",mermaid_382ee21f:"graph TD\n  1([Bottom of the Staircase])--+1--\x3e 2([1 out of 2]);\n  1--+2--\x3e 3([2 out of 2]);\n  2--+1--\x3e 4([2 out of 2]);\n  2--+2--\x3e 5([3 out of 2]);\n",mermaid_382ee241:"graph TD\n  1([Bottom of the Staircase])--+1--\x3e 2([1 out of 3]);\n  1--+2--\x3e 3([2 out of 3]);\n  2--+1--\x3e 4([2 out of 3]);\n  2--+2--\x3e 5([3 out of 3]);\n  3--+1--\x3e 6([3 out of 3]);\n  3--+2--\x3e 7([4 out of 3]);\n  4--+1--\x3e 8([3 out of 3]);\n  4--+2--\x3e 9([4 out of 3]);\n",mermaid_64a570dc:"graph TD\n  1([Bottom of the Staircase])--+1--\x3e 2([1 out of 4]);\n  1--+2--\x3e 3([2 out of 4]);\n  2--+1--\x3e 4([2 out of 4]);\n  2--+2--\x3e 5([3 out of 4]);\n  3--+1--\x3e 6([3 out of 4]);\n  3--+2--\x3e 7([4 out of 4]);\n  4--+1--\x3e 8([3 out of 4]);\n  4--+2--\x3e 9([4 out of 4]);\n  5--+1--\x3e 10([4 out of 4]);\n  5--+2--\x3e 11([5 out of 4]);\n  6--+1--\x3e 12([4 out of 4]);\n  6--+2--\x3e 13([5 out of 4]);\n  8--+1--\x3e 14([4 out of 4]);\n  8--+2--\x3e 15([5 out of 4]);\n"}},c=Object(m.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey},scopedSlots:t._u([{key:"header",fn:function(){return[a("h1",{attrs:{id:"climbing-stairs-solution-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#climbing-stairs-solution-2"}},[t._v("#")]),t._v(" Climbing Stairs Solution 2")])]},proxy:!0}])},[a("h2",{attrs:{id:"links"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[t._v("#")]),t._v(" Links")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode.com/problems/climbing-stairs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Climbing Stairs "),a("div",{staticClass:"emoji-wrap"},[t._v("Problem"),a("span",[t._v(" 💡")])])])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/codemonkeysio/LeetCode",target:"_blank",rel:"noopener noreferrer"}},[t._v("Get the code & notes on "),a("div",{staticClass:"emoji-wrap"},[t._v("GitHub"),a("span",[t._v(" 💻")])])])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://discord.gg/mh9rQmwJ8H",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ask Questions & Share Solutions in "),a("div",{staticClass:"emoji-wrap"},[t._v("Discord"),a("span",[t._v(" 🤖")])])])]),t._v(" "),a("h2",{attrs:{id:"problem-description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#problem-description"}},[t._v("#")]),t._v(" Problem Description")]),t._v(" "),a("p",[t._v("You are climbing a staircase. It takes "),a("span",{staticClass:"post-term-one"},[t._v("n")]),t._v(" steps to reach the top.")]),t._v(" "),a("p",[t._v("Each time you can either climb "),a("span",{staticClass:"post-term-one"},[t._v("1")]),t._v(" or "),a("span",{staticClass:"post-term-one"},[t._v("2")]),t._v(" steps. In how many distinct ways can you climb to the top?")]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("p",[t._v("Ex 1) Input: "),a("span",{staticClass:"post-term-one"},[t._v("n = 2")]),t._v(" "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"27F9"}})],1),a("mjx-mstyle",{attrs:{space:"4"}},[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1)],1)],1),t._v(" Output: "),a("span",{staticClass:"post-term-one"},[t._v("2")])],1),t._v(" "),a("p",[t._v("Explanation: There are "),a("span",{staticClass:"post-term-one"},[t._v("two")]),t._v(" ways to climb to the top."),a("br"),t._v("1. 1 step + 1 step"),a("br"),t._v("2. 2 steps")]),t._v(" "),a("p",[t._v("Ex 2) Input: "),a("span",{staticClass:"post-term-one"},[t._v("n = 3")]),t._v(" "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"27F9"}})],1),a("mjx-mstyle",{attrs:{space:"4"}},[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1)],1)],1),t._v(" Output: "),a("span",{staticClass:"post-term-one"},[t._v("3")])],1),t._v(" "),a("p",[t._v("Explanation: There are "),a("span",{staticClass:"post-term-one"},[t._v("three")]),t._v(" ways to climb to the top."),a("br"),t._v("1. 1 step + 1 step + 1 step"),a("br"),t._v("2. 1 step + 2 steps"),a("br"),t._v("3. 2 steps + 1 step")]),t._v(" "),a("h2",{attrs:{id:"constraints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constraints"}},[t._v("#")]),t._v(" Constraints")]),t._v(" "),a("ul",[a("li",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"2264"}})],1),a("mjx-mstyle",{staticStyle:{color:"#ebeb33"},attrs:{space:"4"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"n"}})],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"2264"}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"4"}}),a("mjx-c",{attrs:{c:"5"}})],1)],1)],1)],1)]),t._v(" "),a("h2",{attrs:{id:"thought-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#thought-process"}},[t._v("#")]),t._v(" Thought Process")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("We previously came up with a solution for this problem by using a "),a("span",{staticClass:"post-term-one"},[t._v("recursive formula")]),t._v(" that represents how many distinct ways we can climb the stairs.")])]),t._v(" "),a("li",[a("p",[t._v("The issue with the previous solution is it has a "),a("span",{staticClass:"post-term-one"},[t._v("time complexity")]),t._v(" of "),a("span",{staticClass:"post-term-one"},[t._v("O(2"),a("sup",[t._v("n")]),t._v(")")]),t._v(" which is very inefficient.")])]),t._v(" "),a("li",[a("p",[t._v("To come up with a better solution we'll be drawing out multiple "),a("span",{staticClass:"post-term-one"},[t._v("recursion trees")]),t._v(" to help us see a pattern.")])]),t._v(" "),a("li",[a("p",[t._v("When "),a("span",{staticClass:"post-term-one"},[t._v("n = 1")]),t._v(" we have:")])])]),t._v(" "),a("Mermaid",{attrs:{id:"mermaid_382ee1e8",graph:t.$dataBlock.mermaid_382ee1e8}}),a("ul",[a("li",[a("p",[t._v("From the diagram we can see there is "),a("span",{staticClass:"post-term-one"},[t._v("1 distinct way")]),t._v(" to climb to the top when "),a("span",{staticClass:"post-term-one"},[t._v("n = 1")]),t._v(" since we can ignore the scenarios where we take extra steps.")])]),t._v(" "),a("li",[a("p",[t._v("When "),a("span",{staticClass:"post-term-one"},[t._v("n = 2")]),t._v(" we have:")])])]),t._v(" "),a("Mermaid",{attrs:{id:"mermaid_382ee21f",graph:t.$dataBlock.mermaid_382ee21f}}),a("ul",[a("li",[a("p",[t._v("So, we have "),a("span",{staticClass:"post-term-one"},[t._v("2 distinct ways")]),t._v(" to climb to the top.")])]),t._v(" "),a("li",[a("p",[t._v("When "),a("span",{staticClass:"post-term-one"},[t._v("n = 3")]),t._v(" we have:")])])]),t._v(" "),a("Mermaid",{attrs:{id:"mermaid_382ee241",graph:t.$dataBlock.mermaid_382ee241}}),a("ul",[a("li",[a("p",[t._v("So, we have "),a("span",{staticClass:"post-term-one"},[t._v("3 distinct ways")]),t._v(" to climb to the top.")])]),t._v(" "),a("li",[a("p",[t._v("When "),a("span",{staticClass:"post-term-one"},[t._v("n = 4")]),t._v(" we have:")])])]),t._v(" "),a("Mermaid",{attrs:{id:"mermaid_64a570dc",graph:t.$dataBlock.mermaid_64a570dc}}),a("ul",[a("li",[a("p",[t._v("So, we have "),a("span",{staticClass:"post-term-one"},[t._v("5 distinct ways")]),t._v(" to climb to the top.")])]),t._v(" "),a("li",[a("p",[t._v("Now, let's take a look at our cases from "),a("span",{staticClass:"post-term-one"},[t._v("n = 1")]),t._v(" to "),a("span",{staticClass:"post-term-one"},[t._v("n = 2")]),t._v(" and see if we can find a pattern:")])])]),t._v(" "),a("p"),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-mstyle",{staticStyle:{color:"#ebeb33"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"n"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"2"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"3"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"4"}})],1)],1)],1)],1)],1),a("p"),t._v(" "),a("p"),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-mstyle",{staticStyle:{color:"#33ebeb"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"w"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"a"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"y"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"s"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"T"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"o"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"C"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"l"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"m"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"b"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"2"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"3"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"4"}})],1)],1)],1)],1)],1),a("p"),t._v(" "),a("ul",[a("li",[a("p",[t._v("Here, "),a("span",{staticClass:"post-term-three"},[t._v("waysToClimb")]),t._v(" denotes our function for determining how many unique ways we can climb the stairs.")])]),t._v(" "),a("li",[a("p",[t._v("This sequence of numbers follows the "),a("span",{staticClass:"post-term-one"},[t._v("Fibonacci")]),t._v(" sequence with the only difference being the value of the "),a("span",{staticClass:"post-term-one"},[t._v("1"),a("sup",[t._v("st")])]),t._v(" and "),a("span",{staticClass:"post-term-one"},[t._v("2"),a("sup",[t._v("nd")])]),t._v(" terms.")])]),t._v(" "),a("li",[a("p",[t._v("Here, the "),a("span",{staticClass:"post-term-one"},[t._v("1"),a("sup",[t._v("st")])]),t._v(" term has a value of "),a("span",{staticClass:"post-term-three"},[t._v("1")]),t._v(" and the "),a("span",{staticClass:"post-term-one"},[t._v("2"),a("sup",[t._v("nd")])]),t._v(" term has a value of "),a("span",{staticClass:"post-term-three"},[t._v("2")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Also, notice that we know we have "),a("span",{staticClass:"post-term-one"},[t._v("two ways")]),t._v(" to climb the stairs to reach the "),a("span",{staticClass:"post-term-one"},[t._v("n"),a("sup",[t._v("th")])]),t._v(" step.")])]),t._v(" "),a("li",[a("p",[t._v("If we take "),a("span",{staticClass:"post-term-one"},[t._v("1 step")]),t._v(", then we're "),a("span",{staticClass:"post-term-one"},[t._v("n - 1")]),t._v(" steps closer to "),a("span",{staticClass:"post-term-one"},[t._v("n")]),t._v(", and if we take "),a("span",{staticClass:"post-term-one"},[t._v("2 steps")]),t._v(" then we're "),a("span",{staticClass:"post-term-one"},[t._v("n - 2")]),t._v(" steps closer to "),a("span",{staticClass:"post-term-one"},[t._v("n")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("So, we can get the distinct number of ways to climb the steps by summing up the ways of climbing to the "),a("span",{staticClass:"post-term-one"},[t._v("n - 1 step")]),t._v(" and the ways of climbing to the "),a("span",{staticClass:"post-term-one"},[t._v("n - 2 step")]),t._v(" using the following formula:")])])]),t._v(" "),a("p"),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-mstyle",{staticStyle:{color:"#33ebeb"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"w"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"a"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"y"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"s"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"T"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"o"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"C"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"l"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"m"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"b"}})],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mstyle",{staticStyle:{color:"#ebeb33"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"n"}})],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mstyle",{staticStyle:{color:"#33ebeb"},attrs:{space:"4"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"w"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"a"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"y"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"s"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"T"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"o"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"C"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"l"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"m"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"b"}})],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mstyle",{staticStyle:{color:"#ebeb33"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"n"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"2212"}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"1"}})],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-mstyle",{staticStyle:{color:"#33ebeb"},attrs:{space:"3"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"w"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"a"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"y"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"s"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"T"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"o"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"C"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"l"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"m"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"b"}})],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mstyle",{staticStyle:{color:"#ebeb33"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"n"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"2212"}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"2"}})],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"f"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"o"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"r"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",{staticStyle:{color:"#ebeb33"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"n"}})],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:">"}})],1),a("mjx-mstyle",{staticStyle:{color:"#ebeb33"},attrs:{space:"4"}},[a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"2"}})],1)],1)],1)],1)],1),a("p"),t._v(" "),a("ul",[a("li",[t._v("The "),a("span",{staticClass:"post-term-one"},[t._v("Fibonacci")]),t._v(" sequence is the following series of numbers:")])]),t._v(" "),a("p"),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-mstyle",{staticStyle:{color:"#ebeb33"}},[a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"0"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"1"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"1"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"2"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"3"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"5"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"8"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"1"}}),a("mjx-c",{attrs:{c:"3"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"2"}}),a("mjx-c",{attrs:{c:"1"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"3"}}),a("mjx-c",{attrs:{c:"4"}})],1),a("mjx-msub",[a("mjx-mo",{staticClass:"mjx-n",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"22EF"}})],1)],1)],1)],1)],1)],1)],1)],1),a("p"),t._v(" "),a("ul",[a("li",[a("p",[t._v("The next number is found by "),a("span",{staticClass:"post-term-one"},[t._v("adding up the two numbers before it")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("For example, "),a("span",{staticClass:"post-term-one"},[t._v("5")]),t._v(" is found by adding "),a("span",{staticClass:"post-term-one"},[t._v("2")]),t._v(" and "),a("span",{staticClass:"post-term-one"},[t._v("3")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("The "),a("span",{staticClass:"post-term-one"},[t._v("first two terms")]),t._v(" are called "),a("span",{staticClass:"post-term-one"},[t._v("seed numbers")]),t._v(", which we'll denote as:")])])]),t._v(" "),a("p"),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-mstyle",{staticStyle:{color:"#ebeb33"}},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"f"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"0"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mstyle",{staticStyle:{color:"#ebeb33"},attrs:{space:"4"}},[a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"0"}})],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mstyle",{staticStyle:{color:"#ebeb33"},attrs:{space:"2"}},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"f"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"1"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mstyle",{staticStyle:{color:"#ebeb33"},attrs:{space:"4"}},[a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1)],1)],1)],1)],1),a("p"),t._v(" "),a("ul",[a("li",[t._v("Here's the formula used to characterize the sequence:")])]),t._v(" "),a("p"),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-mstyle",{staticStyle:{color:"#ebeb33"}},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"f"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"n"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mstyle",{staticStyle:{color:"#ebeb33"},attrs:{space:"4"}},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"f"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"n"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"2212"}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1)],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-mstyle",{staticStyle:{color:"#ebeb33"},attrs:{space:"3"}},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"f"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"n"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"2212"}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"2"}})],1)],1)],1)],1)],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"f"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"o"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"r"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",{staticStyle:{color:"#ebeb33"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"n"}})],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:">"}})],1),a("mjx-mstyle",{staticStyle:{color:"#ebeb33"},attrs:{space:"4"}},[a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1)],1)],1)],1)],1),a("p"),t._v(" "),a("ul",[a("li",[t._v("The "),a("span",{staticClass:"post-term-one"},[t._v("seed numbers")]),t._v(" for our problem are:")])]),t._v(" "),a("p"),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-mstyle",{staticStyle:{color:"#33ebeb"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"w"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"a"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"y"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"s"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"T"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"o"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"C"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"l"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"m"}})],1),a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"b"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"1"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mstyle",{staticStyle:{color:"#33ebeb"},attrs:{space:"4"}},[a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mstyle",{staticStyle:{color:"#33ebeb"},attrs:{space:"2"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"w"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"a"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"y"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"s"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"T"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"o"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"C"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"l"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"m"}})],1),a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"b"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"2"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mstyle",{staticStyle:{color:"#33ebeb"},attrs:{space:"4"}},[a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"2"}})],1)],1)],1)],1)],1),a("p"),t._v(" "),a("ul",[a("li",[a("p",[t._v("Now that we know our pattern of climbing the stairs follows a "),a("span",{staticClass:"post-term-one"},[t._v("Fibonnaci")]),t._v(" sequence we can implement the sequence in our code using the "),a("span",{staticClass:"post-term-three"},[t._v("waysToClimb")]),t._v(" formula and the "),a("span",{staticClass:"post-term-one"},[t._v("seed numbers")]),t._v(" we came up with.")])]),t._v(" "),a("li",[a("p",[t._v("This will improve the "),a("span",{staticClass:"post-term-one"},[t._v("time complexity")]),t._v(" of our solution from the "),a("span",{staticClass:"post-term-one"},[t._v("O(2"),a("sup",[t._v("n")]),t._v(")")]),t._v(" solution we previously came up with.")])])]),t._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),a("code-fence",{attrs:{lang:"js",heading:"Climbing Stairs Solution 2"}},[a("pre",{attrs:{"vue-slot":"code"}},[t._v("var climbStairs = function(n) {\n  if (n === 1) {\n    return 1;\n  } else if (n === 2) {\n    return 2;\n  } else {\n    let waysToClimb1 = 1;\n    let waysToClimb2 = 2;\n    let waysToClimb;\n    let i = 1;\n\n    while (n - 1 > i) {\n      waysToClimb = waysToClimb2 + waysToClimb1;\n      waysToClimb1 = waysToClimb2;\n      waysToClimb2 = waysToClimb;\n      i++;\n    }\n\n    return waysToClimb;\n  }\n};\n\nlet n = 4;\nconsole.log(climbStairs(n));\n\n")])]),t._v(" "),a("h2",{attrs:{id:"analysis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#analysis"}},[t._v("#")]),t._v(" Analysis")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Since we're looping over the length of "),a("span",{staticClass:"post-term-one"},[t._v("n - 1")]),t._v(" our "),a("span",{staticClass:"post-term-one"},[t._v("time complexity")]),t._v(" is "),a("span",{staticClass:"post-term-one"},[t._v("O(n)")]),t._v(" which is a much more efficient solution!")])]),t._v(" "),a("li",[a("p",[t._v("See if you can come up with an even more efficient solution using more properties of the "),a("span",{staticClass:"post-term-one"},[t._v("Fibonnaci")]),t._v(" sequence!")])])])],1)}),[],!1,null,null,null);"function"==typeof e&&e(c);s.default=c.exports}}]);