echo "Starting deploy"
echo "Rename export folder"
mv dist httpdocs
echo "Copying to server"
scp -i deploy_key -r httpdocs travis@malte-bartels.de:/var/www/vhosts/malte-bartels.de/
echo "cleaning up" # useful for local testing
rm -rf httpdocs
echo "Finished deployment"
