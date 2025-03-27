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
  - name: Perceptual Losses for Real-Time Style Transfer and Super-Resolution
    # if a section has subsections, you can add them as follows:
    # subsections:
    #   - name: Example Child Subsection 1
    #   - name: Example Child Subsection 2
  - name: Arbitrary Style Transfer in Real-time with Adaptive Instance Normalization

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

<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0001.jpg" alt="Styletransfer 0001" style="max-width:100%; height:auto;">

## Perceptual Losses for Real-Time Style Transfer and Super-Resolution

<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0002.jpg" alt="Styletransfer 0002" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0003.jpg" alt="Styletransfer 0003" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0004.jpg" alt="Styletransfer 0004" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0005.jpg" alt="Styletransfer 0005" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0006.jpg" alt="Styletransfer 0006" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0007.jpg" alt="Styletransfer 0007" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0008.jpg" alt="Styletransfer 0008" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0009.jpg" alt="Styletransfer 0009" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0010.jpg" alt="Styletransfer 0010" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0011.jpg" alt="Styletransfer 0011" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0012.jpg" alt="Styletransfer 0012" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0013.jpg" alt="Styletransfer 0013" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0014.jpg" alt="Styletransfer 0014" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0015.jpg" alt="Styletransfer 0015" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0016.jpg" alt="Styletransfer 0016" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0017.jpg" alt="Styletransfer 0017" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0018.jpg" alt="Styletransfer 0018" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0019.jpg" alt="Styletransfer 0019" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0020.jpg" alt="Styletransfer 0020" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0021.jpg" alt="Styletransfer 0021" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0022.jpg" alt="Styletransfer 0022" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0023.jpg" alt="Styletransfer 0023" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0024.jpg" alt="Styletransfer 0024" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0025.jpg" alt="Styletransfer 0025" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0026.jpg" alt="Styletransfer 0026" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0027.jpg" alt="Styletransfer 0027" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0028.jpg" alt="Styletransfer 0028" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0029.jpg" alt="Styletransfer 0029" style="max-width:100%; height:auto;"><br>

## Arbitrary Style Transfer in Real-time with Adaptive Instance Normalization

<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0030.jpg" alt="Styletransfer 0030" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0031.jpg" alt="Styletransfer 0031" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0032.jpg" alt="Styletransfer 0032" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0033.jpg" alt="Styletransfer 0033" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0034.jpg" alt="Styletransfer 0034" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0035.jpg" alt="Styletransfer 0035" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0036.jpg" alt="Styletransfer 0036" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0037.jpg" alt="Styletransfer 0037" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0038.jpg" alt="Styletransfer 0038" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0039.jpg" alt="Styletransfer 0039" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0040.jpg" alt="Styletransfer 0040" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0041.jpg" alt="Styletransfer 0041" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0042.jpg" alt="Styletransfer 0042" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0043.jpg" alt="Styletransfer 0043" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0044.jpg" alt="Styletransfer 0044" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0045.jpg" alt="Styletransfer 0045" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0046.jpg" alt="Styletransfer 0046" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0047.jpg" alt="Styletransfer 0047" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0048.jpg" alt="Styletransfer 0048" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0049.jpg" alt="Styletransfer 0049" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0050.jpg" alt="Styletransfer 0050" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0051.jpg" alt="Styletransfer 0051" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0052.jpg" alt="Styletransfer 0052" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0053.jpg" alt="Styletransfer 0053" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0054.jpg" alt="Styletransfer 0054" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0055.jpg" alt="Styletransfer 0055" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0056.jpg" alt="Styletransfer 0056" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0057.jpg" alt="Styletransfer 0057" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0058.jpg" alt="Styletransfer 0058" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0059.jpg" alt="Styletransfer 0059" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0060.jpg" alt="Styletransfer 0060" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0061.jpg" alt="Styletransfer 0061" style="max-width:100%; height:auto;"><br>
<img src="/assets/img/250327/250327_심정균_Styletransfer_page-0062.jpg" alt="Styletransfer 0062" style="max-width:100%; height:auto;"><br>
