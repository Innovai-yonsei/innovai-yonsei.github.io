---
layout: distill
title: Perceptual Loss
description:  "Perceptual Losses for Real-Time Style Transfer and Super-Resolution"
tags: Gen2D
giscus_comments: true
date: 2025-03-27
featured: false
mermaid:
  enabled: true
  zoomable: true
code_diff: true
map: true
chart:
  chartjs: true
  echarts: true
  vega_lite: true
tikzjax: true
typograms: true

authors:
  - name: Justin Johnson
    affiliations:
      name: Department of Computer Science, Stanford University

  - name: Alexandre Alahi
    affiliations:
      name: Department of Computer Science, Stanford University

  - name: Li Fei-Fei
    affiliations:
      name: Department of Computer Science, Stanford University


bibliography: 2025-03-27-PerceptualLoss.bib

# Optionally, you can add a table of contents to your post.
# NOTES:
#   - make sure that TOC names match the actual section names
#     for hyperlinks within the post to work correctly.
#   - we may want to automate TOC generation in the future using
#     jekyll-toc plugin (https://github.com/toshimaru/jekyll-toc).
toc:
  - name: Introduction
    # if a section has subsections, you can add them as follows:
    # subsections:
    #   - name: Example Child Subsection 1
    #   - name: Example Child Subsection 2
  - name: Background
  - name: StyleAligned
  - name: Comparisons
  - name: Additional Results
  - name: Appendix

# Below is an example of injecting additional post-specific styles.
# If you use this post as a template, delete this _styles block.
_styles: >
  .fake-img {
    background: #bbb;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 0px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 12px;
  }
  .fake-img p {
    font-family: monospace;
    color: white;
    text-align: left;
    margin: 12px 0;
    text-align: center;
    font-size: 16px;
  }
---

Date : 2025/03/27

Presentator : Sim, Jeonggyun

<img src="/assets/img/250313/250313_이성훈_StyleAligned_page-0001.jpg" alt="FaceWarehouse" style="max-width:100%; height:auto;">
<img src="/assets/img/250313/250313_이성훈_StyleAligned_page-0002.jpg" alt="FaceWarehouse" style="max-width:100%; height:auto;">

## Introduction

<img src="/assets/img/250313/250313_이성훈_StyleAligned_page-0003.jpg" alt="FaceWarehouse" style="max-width:100%; height:auto;">
<img src="/assets/img/250313/250313_이성훈_StyleAligned_page-0004.jpg" alt="FaceWarehouse" style="max-width:100%; height:auto;">
<img src="/assets/img/250313/250313_이성훈_StyleAligned_page-0005.jpg" alt="FaceWarehouse" style="max-width:100%; height:auto;">

## Background

<img src="/assets/img/250313/250313_이성훈_StyleAligned_page-0006.jpg" alt="FaceWarehouse" style="max-width:100%; height:auto;">
<img src="/assets/img/250313/250313_이성훈_StyleAligned_page-0007.jpg" alt="FaceWarehouse" style="max-width:100%; height:auto;">
<img src="/assets/img/250313/250313_이성훈_StyleAligned_page-0008.jpg" alt="FaceWarehouse" style="max-width:100%; height:auto;">

## StyleAligned

<img src="/assets/img/250313/250313_이성훈_StyleAligned_page-0009.jpg" alt="FaceWarehouse" style="max-width:100%; height:auto;">
<img src="/assets/img/250313/250313_이성훈_StyleAligned_page-0010.jpg" alt="FaceWarehouse" style="max-width:100%; height:auto;">
<img src="/assets/img/250313/250313_이성훈_StyleAligned_page-0011.jpg" alt="FaceWarehouse" style="max-width:100%; height:auto;">

## Comparisons

<img src="/assets/img/250313/250313_이성훈_StyleAligned_page-0012.jpg" alt="FaceWarehouse" style="max-width:100%; height:auto;">
<img src="/assets/img/250313/250313_이성훈_StyleAligned_page-0013.jpg" alt="FaceWarehouse" style="max-width:100%; height:auto;">
<img src="/assets/img/250313/250313_이성훈_StyleAligned_page-0014.jpg" alt="FaceWarehouse" style="max-width:100%; height:auto;">
<img src="/assets/img/250313/250313_이성훈_StyleAligned_page-0015.jpg" alt="FaceWarehouse" style="max-width:100%; height:auto;">
<img src="/assets/img/250313/250313_이성훈_StyleAligned_page-0016.jpg" alt="FaceWarehouse" style="max-width:100%; height:auto;">

## Additional Results

<img src="/assets/img/250313/250313_이성훈_StyleAligned_page-0017.jpg" alt="FaceWarehouse" style="max-width:100%; height:auto;">
<img src="/assets/img/250313/250313_이성훈_StyleAligned_page-0018.jpg" alt="FaceWarehouse" style="max-width:100%; height:auto;">
<img src="/assets/img/250313/250313_이성훈_StyleAligned_page-0019.jpg" alt="FaceWarehouse" style="max-width:100%; height:auto;">
<img src="/assets/img/250313/250313_이성훈_StyleAligned_page-0020.jpg" alt="FaceWarehouse" style="max-width:100%; height:auto;">

## Appendix

<img src="/assets/img/250313/250313_이성훈_StyleAligned_page-0021.jpg" alt="FaceWarehouse" style="max-width:100%; height:auto;">
<img src="/assets/img/250313/250313_이성훈_StyleAligned_page-0022.jpg" alt="FaceWarehouse" style="max-width:100%; height:auto;">
<img src="/assets/img/250313/250313_이성훈_StyleAligned_page-0023.jpg" alt="FaceWarehouse" style="max-width:100%; height:auto;">
<img src="/assets/img/250313/250313_이성훈_StyleAligned_page-0024.jpg" alt="FaceWarehouse" style="max-width:100%; height:auto;">
<img src="/assets/img/250313/250313_이성훈_StyleAligned_page-0025.jpg" alt="FaceWarehouse" style="max-width:100%; height:auto;">
<img src="/assets/img/250313/250313_이성훈_StyleAligned_page-0026.jpg" alt="FaceWarehouse" style="max-width:100%; height:auto;">