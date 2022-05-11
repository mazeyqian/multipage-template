echo "Start Build Docker";

# ProjectName/SubName
preVersion="multipage/dist";
# Port
visitPort="7415";

# Stop
echo "Stop Docker Containers";
docker ps;
docker ps|awk '{if (NR!=1) print $1}'| xargs docker stop;

# Remove
echo "Remove Docker Image";
docker ps -a -q;
docker rm $(docker ps -a -q);

# Generate
randomVersion=${RANDOM};
combinedVersion="${preVersion}:v${randomVersion}"
echo "Generate random version: ${combinedVersion}";

# Build
echo "Build Docker Image: ${combinedVersion}";
docker build -t ${combinedVersion} . -f ./Dockerfile;

# Run
echo "Run Docker";
docker run -d -p ${visitPort}:80 ${combinedVersion};

# Notification
echo "Complete, Visit: http://localhost:${visitPort}";
