#!/bin/bash

bitrate="250K"
# f="random_line_cube.mp4"
scale_factor=2

for f in "$@"; do 
ffmpeg -y -i "$f" -c:v libvpx-vp9 -b:v "$bitrate" -vf scale=iw/${scale_factor}:-1 -pass 1 -an -f null /dev/null && \
	ffmpeg -y -i "$f" -c:v libvpx-vp9 -b:v "$bitrate" -vf scale=iw/${scale_factor}:-1 -pass 2 -an "generated_thumbnails/${f%.mp4}_thumbnail.webm"
done
