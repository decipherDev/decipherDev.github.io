---
title: Java Streams Demo
date: 2024-02-11T21:27:15.000Z
topic: Java
description: Demo on java streams
preview: Demo on java streams...
canonicalUrl: java-streams/
permalink: /java-streams/
redirectFrom: /posts/2024/02/11/java-streams/
---

::: slot header

# Examples using Java streams

:::

## Group employee on the basis of department

```
List.of(new Employee("Arun", "Engineering"), 
        new Employee("Brijesh", "Devops"), 
        new Employee("Reema", "HR"))
     .stream()
     .collect(Collectors.groupingBy(Employee::department));
```
## Find the average, sum, min, max, count

<code-group>
<code-block title="summarizingInt">

``` 
IntSummaryStatistics summary = List.of(5, 2, 4, 6, 7, 9)
                                   .stream()
                                   .collect(Collectors.summarizingInt(Integer::intValue));
summary.getAverage(); summary.getSum(); summary.getMin(); summary.getMax(); summary.getCount()
```

</code-block>
<code-block title="summaryStatistics">

```
double avg = List.of(new Customer(1, "hello"), new Customer(2, "hi"), new Customer(3, "bye"))
                  .stream()
                  .mapToInt(c -> c.id)
                  .summaryStatistics()
                  .getAverage();
```

</code-block>
</code-group>

## Find the frequency of the characters

```
String s = "hello";
s.chars()
 .mapToObj(s -> (char)s)
 .collect(Collectors.groupingBy(s -> s, Collectors.counting()));
```

## Find the first non repeating character from a String

```
 "hello".chars()
        .mapToObj(c -> (char)c)
        .collect(Collectors.groupingBy(c -> c, LinkedHashMap::new, Collectors.counting()))
        .entrySet()
        .stream()
        .filter(e -> e.getValue() == 1)
        .map(e -> e.getKey())
        .findFirst()
        .get();
```

## Find the duplicates and print them in sorted order

```
"nonrepeatingword".chars()
       .mapToObj(c -> (char) c)
       .collect(Collectors.groupingBy(Function.identity(), TreeMap::new, Collectors.counting()))
       .entrySet()
       .stream()
       .filter(e -> e.getValue() != 1)
       .map(e -> e.getKey())
       .forEach(key -> System.out.print(key+" "));
```

## Convert the list into an Array

<code-group>
<code-block title="primitive int array">

```
int[] arr = List.of(1,2,3,4,5).stream().mapToInt(x -> Integer.valueOf(x)).toArray();
```

</code-block>
<code-block title="Integer array">

```
Integer[] arrOne = List.of(1,2,3,4,5).toArray(new Integer[0]);
Integer[] arrTwo = List.of(1,2,3,4,5).toArray(Integer[]::new);
```
</code-block>
<code-block title="String array">

```
String[] arr = List.of("A", "B", "C").toArray(new String[0]);

String[] arr = List.of("A", "B", "C").toArray(String[]::new);
```

</code-block>
</code-group>