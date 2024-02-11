---
title: Contains Duplicate
date: 2024-02-11T18:24:00.000Z
topic: LeetCode
description: Check out the Solution & Notes for the LeetCode problem Contains Duplicate!
preview: Given an integer array nums, return true if any value appears at least twice, and return false if every...
canonicalUrl: contains-duplicate/
mathjax:
  presets: '\def\lr#1#2#3{\left#1#2\right#3}'
permalink: /contains-duplicate/
redirectFrom: /posts/2024/02/11/contains-duplicate/
---

::: slot header

# Contains Duplicate

:::

## Links

<p><a href="https://leetcode.com/problems/contains-duplicate/" target="_blank" rel="noopener noreferrer">Contains Duplicate <div class="emoji-wrap">Problem<span>&nbsp;💡</span></div></a></p>
<p><a href="https://github.com/decipherDev/leetcode" target="_blank" rel="noopener noreferrer">Get the code & notes on <div class="emoji-wrap">GitHub<span>&nbsp;💻</span></div></a></p>

## Problem Description

Given an <span class="post-term-one">integer</span> array <span class="post-term-one">nums</span>, return <span class="post-term-one">true</span> if any value appears <span class="post-term-one post-term-bold">at least twice</span>, and return <span class="post-term-one">false</span> if every element is distinct.

## Examples

Ex 1) Input: <span class="post-term-one">nums</span> = [1, 2, 3, 1] $\implies$ Output: <span class="post-term-one">true</span> since 1 appears twice.

Ex 2) Input: <span class="post-term-one">nums</span> = [1, 2, 3, 4] $\implies$ Output: <span class="post-term-one">false</span> since no value appears twice.

Ex 3) Input: <span class="post-term-one">nums</span> = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2] $\implies$ Output: <span class="post-term-one">true</span> since 1, 3, and 2 appear more than once.

Ex 4) Input: <span class="post-term-one">nums</span> = [] $\implies$ Output: <span class="post-term-one">false</span> since there are no values.

## Constraints

$1 \leq \color{#ebeb33}{nums.length} \leq 10^5$

$-10^9 \leq \color{#ebeb33}{nums[i]} \leq 10^9$

## Implementation

```java
import java.util.Set;
import java.util.HashSet;
class Solution {
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> set = new HashSet<>();
        set.add(nums[0]);
        for (int i = 1; i < nums.length;  i++) {
            if (set.contains(nums[i])) {
                return true;
            } else {
                set.add(nums[i]);
            }
        }

        return false;
    }
}
```