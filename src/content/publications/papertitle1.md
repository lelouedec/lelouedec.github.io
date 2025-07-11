---
title: "Beacon2Science: Enhancing STEREO/HI beacon data with machine learning for efficient CME tracking"
description: "Observing and forecasting coronal mass ejections (CME) in real-time is crucial due to the strong geomagnetic storms they can generate that can have a potentially damaging effect, for example, on satellites and electrical devices. With its near-real-time availability, STEREO/HI beacon data is the perfect candidate for early forecasting of CMEs. However, previous work concluded that CME arrival prediction based on beacon data could not achieve the same accuracy as with high-resolution science data due to data gaps and lower quality. We present our novel pipeline entitled ''Beacon2Science'', bridging the gap between beacon and science data to improve CME tracking. Through this pipeline, we first enhance the quality (signal-to-noise ratio and spatial resolution) of beacon data. We then increase the time resolution of enhanced beacon images through learned interpolation to match science data's 40-minute resolution. We maximize information coherence between consecutive frames with adapted model architecture and loss functions through the different steps. The improved beacon images are comparable to science data, showing better CME visibility than the original beacon data. Furthermore, we compare CMEs tracked in beacon, enhanced beacon, and science images. The tracks extracted from enhanced beacon data are closer to those from science images, with a mean average error of ~ 0.5° elongation compared to with original beacon data. The work presented in this paper paves the way for its application to forthcoming missions such as Vigil and PUNCH."
year: "2025"
authors: "Justin Le Louëdec, Maike Bauer, Tanja Amerstorfer, Jackie A Davies"
paperURL: "Paper: https://arxiv.org/abs/2503.15288"
codeURL: "Code: https://github.com/lelouedec/beacon2science"
# webURL: "Web: https://github.com/markhorn-dev/astro-sphere"
img: "/rupert-cat.gif"
imgAlt: "Paper Teaser"
pub: "Space Weather"
# dataURL: "Data: "
---

