---
title: "Deep learning investigation for chess player attention prediction using eye-tracking and game data"
description: "This article reports on an investigation of the use of convolutional neural networks to predict the visual attention of chess players. The visual attention model described in this article has been created to generate saliency maps that capture hierarchical and spatial features of chessboard, in order to predict the probability fixation for individual pixels Using a skip-layer architecture of an autoencoder, with a unified decoder, we are able to use multiscale features to predict saliency of part of the board at different scales, showing multiple relations between pieces. We have used scan path and fixation data from players engaged in solving chess problems, to compute 6600 saliency maps associated to the corresponding chess piece configurations. This corpus is completed with synthetically generated data from actual games gathered from an online chess platform. Experiments realized using both scan-paths from chess players and the CAT2000 saliency dataset of natural images, highlights several results. Deep features, pretrained on natural images, were found to be helpful in training visual attention prediction for chess. The proposed neural network architecture is able to generate meaningful saliency maps on unseen chess configurations with good scores on standard metrics. This work provides a baseline for future work on visual attention prediction in similar contexts."
date: "2019"
authors: "Justin Le Louëdec, Thomas Guntz, James L Crowley, Dominique Vaufreydaz"
paperURL: "Paper: https://dl.acm.org/doi/abs/10.1145/3314111.3319827"
# codeURL: "Code: https://astro-sphere-demo.vercel.app"
# webURL: "Web: https://github.com/markhorn-dev/astro-sphere"
img: "/chess_paper.png"
imgAlt: "Paper Teaser"
pub: "In Proceedings of the 11th ACM Symposium on Eye Tracking Research & Applications}"
dataURL: "Data: "
---

