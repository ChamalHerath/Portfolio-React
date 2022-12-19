# Getting Started with My Portfolio

## Docker Commands

1) To build Docker Image, you can run:

### `docker build -t local-image:tag_name`
<br/>

2) To run Docker Image, you can run:

### `docker run local-image:tag_name`
<br/>

3) To deploy Docker Image to DockerHub, you can run:

### `docker tag local-image:tag_name new-repo:tag_name`
### `docker push new-repo:tag_name`
<br/>

4) To pull Docker Image from DockerHub, you can run:

### `docker pull new-repo:tag_name`
<br/>

5) To run Docker Image Locally, you can run:

### `docker run -d -p 80:80 local-image:tag_name`