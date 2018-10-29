echo "Starting deploy"
echo "Create delivery folder"
mkdir -p output/httpdocs
cp index.html script.js style.css ./output/httpdocs
cp -r assets/ ./output/httpdocs/assets
echo "Copying to server"
scp -i deploy_key -r output/httpdocs travis@malte-bartels.de:/var/www/vhosts/malte-bartels.de/
echo "cleaning up"
rm -rf output
echo "Finished deployment"
