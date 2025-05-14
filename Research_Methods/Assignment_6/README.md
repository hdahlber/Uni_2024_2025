The goal of this assignment is to learn how to analyze experimental data in jupyter and interpret the results

Let's assume that we want to replicate the experiment described in the paper "Detection or Isolation of Defects? An Experimental Comparison of Unit Testing and Code Inspection" by Runeson and Andrews.  For that we organize a new experiment in Turku following the experimental design described in the article. We try to mimic the original experiment as much as possible. The main difference will be the subjects, place and time. 

In our replica, 20 subjects show up for the experiment and they carry out the two experimental test as described in the paper. We then collect the experimental data in the file "experiment_results".

Your task now know is to create a Jupyter notebook that recreates the following figures and tables from the original paper but using the data from our experiment:

- Figure 1. Boxplot of detected defects per program and per technique.

- Figure 2. Boxplot of isolated defects per program and per technique.

- Table 7. Descriptive statistics for defects detected and isolated, grouped per technique

- Table 8. Descriptive statistics for defects detected and isolated grouped per program

- Table 9. Results of Wilcoxon signed rank test for the hypotheses regarding effectiveness and efficiency.

Then you should  interpret the results and compare them with the original article

How to proceed

1. Read the paper "Detection or Isolation of Defects? An Experimental Comparison of Unit Testing and Code Inspection"

2. Create an Jupyter notebook  that computes figures 1 and 2 and tables 7,8,9 using the data in the file "experimental_results"

3. Write a short interpretation of the results of the analysis (less than 300 words)