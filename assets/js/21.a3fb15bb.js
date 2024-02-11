(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{455:function(t,s,a){"use strict";a.r(s);var m=a(17),c=function(t){t.options.__data__block__={mermaid_382ee1e0:"graph TD\n  1([Bottom of the Staircase])--+1--\x3e 2([1 out of 3]);\n  1--+2--\x3e 3([2 out of 3]);\n  2--+1--\x3e 4([2 out of 3]);\n  2--+2--\x3e 5([3 out of 3]);\n  3--+1--\x3e 6([3 out of 3]);\n  3--+2--\x3e 7([4 out of 3]);\n  4--+1--\x3e 8([3 out of 3]);\n  4--+2--\x3e 9([4 out of 3]);\n"}},i=Object(m.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey},scopedSlots:t._u([{key:"header",fn:function(){return[a("h1",{attrs:{id:"climbing-stairs-solution-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#climbing-stairs-solution-1"}},[t._v("#")]),t._v(" Climbing Stairs Solution 1")])]},proxy:!0}])},[a("h2",{attrs:{id:"links"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[t._v("#")]),t._v(" Links")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode.com/problems/climbing-stairs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Climbing Stairs "),a("div",{staticClass:"emoji-wrap"},[t._v("Problem"),a("span",[t._v(" 💡")])])])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/codemonkeysio/LeetCode",target:"_blank",rel:"noopener noreferrer"}},[t._v("Get the code & notes on "),a("div",{staticClass:"emoji-wrap"},[t._v("GitHub"),a("span",[t._v(" 💻")])])])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://discord.gg/mh9rQmwJ8H",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ask Questions & Share Solutions in "),a("div",{staticClass:"emoji-wrap"},[t._v("Discord"),a("span",[t._v(" 🤖")])])])]),t._v(" "),a("h2",{attrs:{id:"problem-description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#problem-description"}},[t._v("#")]),t._v(" Problem Description")]),t._v(" "),a("p",[t._v("You are climbing a staircase. It takes "),a("span",{staticClass:"post-term-one"},[t._v("n")]),t._v(" steps to reach the top.")]),t._v(" "),a("p",[t._v("Each time you can either climb "),a("span",{staticClass:"post-term-one"},[t._v("1")]),t._v(" or "),a("span",{staticClass:"post-term-one"},[t._v("2")]),t._v(" steps. In how many distinct ways can you climb to the top?")]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("p",[t._v("Ex 1) Input: "),a("span",{staticClass:"post-term-one"},[t._v("n = 2")]),t._v(" "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"27F9"}})],1),a("mjx-mstyle",{attrs:{space:"4"}},[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1)],1)],1),t._v(" Output: "),a("span",{staticClass:"post-term-one"},[t._v("2")])],1),t._v(" "),a("p",[t._v("Explanation: There are "),a("span",{staticClass:"post-term-one"},[t._v("two")]),t._v(" ways to climb to the top."),a("br"),t._v("1. 1 step + 1 step"),a("br"),t._v("2. 2 steps")]),t._v(" "),a("p",[t._v("Ex 2) Input: "),a("span",{staticClass:"post-term-one"},[t._v("n = 3")]),t._v(" "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"27F9"}})],1),a("mjx-mstyle",{attrs:{space:"4"}},[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1)],1)],1),t._v(" Output: "),a("span",{staticClass:"post-term-one"},[t._v("3")])],1),t._v(" "),a("p",[t._v("Explanation: There are "),a("span",{staticClass:"post-term-one"},[t._v("three")]),t._v(" ways to climb to the top."),a("br"),t._v("1. 1 step + 1 step + 1 step"),a("br"),t._v("2. 1 step + 2 steps"),a("br"),t._v("3. 2 steps + 1 step")]),t._v(" "),a("h2",{attrs:{id:"constraints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constraints"}},[t._v("#")]),t._v(" Constraints")]),t._v(" "),a("ul",[a("li",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"2264"}})],1),a("mjx-mstyle",{staticStyle:{color:"#ebeb33"},attrs:{space:"4"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"n"}})],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"2264"}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"4"}}),a("mjx-c",{attrs:{c:"5"}})],1)],1)],1)],1)]),t._v(" "),a("h2",{attrs:{id:"thought-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#thought-process"}},[t._v("#")]),t._v(" Thought Process")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Let's start by diagramming the different ways we can climb the steps to see if we can find a pattern.")]),t._v(" "),a("ul",[a("li",[t._v("When "),a("span",{staticClass:"post-term-one"},[t._v("n = 3")]),t._v(" we have:")])])])]),t._v(" "),a("Mermaid",{attrs:{id:"mermaid_382ee1e0",graph:t.$dataBlock.mermaid_382ee1e0}}),a("ul",[a("li",[a("p",[t._v("From the diagram we can see there are "),a("span",{staticClass:"post-term-one"},[t._v("3")]),t._v(" distinct ways to climb to the top when "),a("span",{staticClass:"post-term-one"},[t._v("n = 3")]),t._v(" since we can ignore the scenarios where we take extra steps.")])]),t._v(" "),a("li",[a("p",[t._v("To help you see a pattern try drawing out more diagrams for larger values of "),a("span",{staticClass:"post-term-one"},[t._v("n")]),t._v(" or creating a generalized diagram for any value of "),a("span",{staticClass:"post-term-one"},[t._v("n")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("The diagram above is an example of a "),a("span",{staticClass:"post-term-one"},[t._v("recursion tree")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("So, one way to solve this problem is to come up with a "),a("span",{staticClass:"post-term-one"},[t._v("recursive formula")]),t._v(" that represents how many distinct ways we can climb the stairs.")])]),t._v(" "),a("li",[a("p",[t._v("Let's use the diagram to help us come up with our "),a("span",{staticClass:"post-term-one"},[t._v("recursive formula")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("We know we can either add "),a("span",{staticClass:"post-term-one"},[t._v("1")]),t._v(" step or "),a("span",{staticClass:"post-term-one"},[t._v("2")]),t._v(" steps each time we climb up the stairs, and we want to hit our target of "),a("span",{staticClass:"post-term-one"},[t._v("n")]),t._v(" steps.")])]),t._v(" "),a("li",[a("p",[t._v("So, we need to keep track of how many steps we have taken which we can represent with the variable "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mstyle",{staticStyle:{color:"#33eb61"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"s"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"t"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"p"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"s"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"T"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"a"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"k"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"n"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"c"}})],1)],1)],1)],1)],1)],1),t._v(", where "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mstyle",{staticStyle:{color:"#33eb61"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"c"}})],1)],1)],1)],1),t._v(" represents the current choice when climbing the stairs.")],1)]),t._v(" "),a("li",[a("p",[t._v("Initially, "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mstyle",{staticStyle:{color:"#33eb61"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"s"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"t"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"p"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"s"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"T"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"a"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"k"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"n"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"0"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mstyle",{staticStyle:{color:"#33eb61"},attrs:{space:"4"}},[a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"0"}})],1)],1)],1)],1),t._v(", here "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mstyle",{staticStyle:{color:"#33eb61"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"c"}})],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mstyle",{staticStyle:{color:"#33eb61"},attrs:{space:"4"}},[a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"0"}})],1)],1)],1)],1),t._v(" means we haven't made a choice to take "),a("span",{staticClass:"post-term-one"},[t._v("1")]),t._v(" step or "),a("span",{staticClass:"post-term-one"},[t._v("2")]),t._v(" steps yet.")],1)]),t._v(" "),a("li",[a("p",[t._v("Each time we climb the stairs we make one of the following choices:")])])]),t._v(" "),a("p"),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-mstyle",{staticStyle:{color:"#33eb61"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"s"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"t"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"p"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"s"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"T"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"a"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"k"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"n"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"c"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mstyle",{staticStyle:{color:"#33eb61"},attrs:{space:"4"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"s"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"t"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"p"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"s"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"T"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"a"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"k"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"n"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"c"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"2212"}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1)],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"1"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mstyle",{attrs:{space:"2"}},[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"f"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"o"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"r"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",{staticStyle:{color:"#33eb61"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"c"}})],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:">"}})],1),a("mjx-mstyle",{staticStyle:{color:"#33eb61"},attrs:{space:"4"}},[a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"0"}})],1)],1)],1)],1)],1),a("p"),t._v(" "),a("p"),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"o"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"r"}})],1)],1)],1)],1),a("p"),t._v(" "),a("p"),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-mstyle",{staticStyle:{color:"#33eb61"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"s"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"t"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"p"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"s"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"T"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"a"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"k"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"n"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"c"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mstyle",{staticStyle:{color:"#33eb61"},attrs:{space:"4"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"s"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"t"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"p"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"s"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"T"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"a"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"k"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"n"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"c"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"2212"}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1)],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"2"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mstyle",{attrs:{space:"2"}},[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"f"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"o"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"r"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",{staticStyle:{color:"#33eb61"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"c"}})],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:">"}})],1),a("mjx-mstyle",{staticStyle:{color:"#33eb61"},attrs:{space:"4"}},[a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"0"}})],1)],1)],1)],1)],1),a("p"),t._v(" "),a("ul",[a("li",[a("p",[t._v("Now, we'll let "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mstyle",{staticStyle:{color:"#33ebeb"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"w"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"a"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"y"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"T"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"o"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"C"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"l"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"m"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"b"}})],1)],1)],1)],1),t._v(" denote our function for climbing the stairs.")],1)]),t._v(" "),a("li",[a("p",[t._v("Here's how we can represent the different scenarios for climbing the stairs:")])])]),t._v(" "),a("p"),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-mstyle",{staticStyle:{color:"#33ebeb"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"w"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"a"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"y"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"T"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"o"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"C"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"l"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"m"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"b"}})],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mstyle",{staticStyle:{color:"#33eb61"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"s"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"t"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"p"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"s"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"T"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"a"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"k"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"n"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"c"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"2212"}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1)],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"1"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mstyle",{staticStyle:{color:"#ebeb33"},attrs:{space:"2"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"n"}})],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-mstyle",{staticStyle:{color:"#33ebeb"},attrs:{space:"3"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"w"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"a"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"y"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"T"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"o"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"C"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"l"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"m"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"b"}})],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mstyle",{staticStyle:{color:"#33eb61"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"s"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"t"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"p"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"s"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"T"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"a"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"k"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"n"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"c"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"2212"}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1)],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"2"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mstyle",{staticStyle:{color:"#ebeb33"},attrs:{space:"2"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"n"}})],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mstyle",{attrs:{space:"2"}},[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"f"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"o"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"r"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",[a("mjx-mspace",{staticStyle:{width:"0.278em"}})],1),a("mjx-mstyle",{staticStyle:{color:"#33eb61"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"c"}})],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:">"}})],1),a("mjx-mstyle",{staticStyle:{color:"#33eb61"},attrs:{space:"4"}},[a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"0"}})],1)],1)],1)],1)],1),a("p"),t._v(" "),a("ul",[a("li",[a("p",[t._v("We're passing the "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mstyle",{staticStyle:{color:"#33eb61"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"s"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"t"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"p"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"s"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"T"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"a"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"k"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"n"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"c"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"2212"}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1)],1)],1)],1)],1)],1)],1),t._v(" + "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mstyle",{staticStyle:{color:"#cc99ff"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"n"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"t"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"S"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"t"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"p"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"S"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"z"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"e"}})],1)],1)],1)],1),t._v(" and our target value of "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mstyle",{staticStyle:{color:"#ebeb33"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"n"}})],1)],1)],1)],1),t._v(" steps to our function "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mstyle",{staticStyle:{color:"#33ebeb"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"w"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"a"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"y"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"T"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"o"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"C"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"l"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"m"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"b"}})],1)],1)],1)],1),t._v(".")],1)]),t._v(" "),a("li",[a("p",[t._v("Now, we need to determine how many times we need to to call "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mstyle",{staticStyle:{color:"#33ebeb"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"w"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"a"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"y"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"T"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"o"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"C"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"l"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"m"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"b"}})],1)],1)],1)],1),t._v(".")],1)]),t._v(" "),a("li",[a("p",[t._v("We know from the diagram if "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mstyle",{staticStyle:{color:"#33eb61"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"s"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"t"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"p"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"s"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"T"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"a"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"k"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"n"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"c"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:">"}})],1),a("mjx-mstyle",{staticStyle:{color:"#ebeb33"},attrs:{space:"4"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"n"}})],1)],1)],1)],1),t._v(", then we can ignore that way of climbing the stairs")],1)]),t._v(" "),a("li",[a("p",[t._v("We also know if "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mstyle",{staticStyle:{color:"#33eb61"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"s"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"t"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"p"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"s"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"T"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"a"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"k"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"n"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"c"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mstyle",{staticStyle:{color:"#ebeb33"},attrs:{space:"4"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"n"}})],1)],1)],1)],1),t._v(", then we have found a valid way to climb the steps.")],1)]),t._v(" "),a("li",[a("p",[t._v("Using this knowledge we can come up with the following:")])])]),t._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),a("code-fence",{attrs:{lang:"js",heading:"Climbing Stairs Solution 1"}},[a("pre",{attrs:{"vue-slot":"code"}},[t._v("var climbStairs = function(n) {\n  return wayToClimb(0, n);\n};\n\nvar wayToClimb = function(stepsTaken, n) {\n  if (stepsTaken > n) {\n    return 0;\n  }\n\n  if (stepsTaken === n) {\n    return 1;\n  }\n\n  return wayToClimb(stepsTaken + 1, n) + wayToClimb(stepsTaken + 2, n);\n};\n\nlet n = 4;\nconsole.log(climbStairs(n));\n\n")])]),t._v(" "),a("h2",{attrs:{id:"downsides"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#downsides"}},[t._v("#")]),t._v(" Downsides")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Our solution will work, but it's not efficient.")])]),t._v(" "),a("li",[a("p",[t._v("We'll actually get a time limit exceeded error on LeetCode if we submit this.")])]),t._v(" "),a("li",[a("p",[t._v("This is because the "),a("span",{staticClass:"post-term-one"},[t._v("time complexity")]),t._v(" of our solution is "),a("span",{staticClass:"post-term-one"},[t._v("O(2"),a("sup",[t._v("n")]),t._v(")")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("We can look at our "),a("span",{staticClass:"post-term-one"},[t._v("recursion tree")]),t._v(" above and count the number of nodes to determine the "),a("span",{staticClass:"post-term-one"},[t._v("time complexity")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Now, we won't count exactly "),a("span",{staticClass:"post-term-one"},[t._v("2"),a("sup",[t._v("n")])]),t._v(" nodes since our "),a("span",{staticClass:"post-term-one"},[t._v("recursive formula")]),t._v(" isn't exactly "),a("span",{staticClass:"post-term-one"},[t._v("2"),a("sup",[t._v("n")])]),t._v(", but when dealing with "),a("span",{staticClass:"post-term-one"},[t._v("Big-Oh")]),t._v(" we only care about the behavior as "),a("span",{staticClass:"post-term-one"},[t._v("n")]),t._v(" becomes very large.")])]),t._v(" "),a("li",[a("p",[t._v("We'll be improving this in the next post by drawing out "),a("span",{staticClass:"post-term-one"},[t._v("recursion trees")]),t._v(" for larger values of "),a("span",{staticClass:"post-term-one"},[t._v("n")]),t._v(" which will allow us to see an interesting pattern.")])])])],1)}),[],!1,null,null,null);"function"==typeof c&&c(i);s.default=i.exports}}]);