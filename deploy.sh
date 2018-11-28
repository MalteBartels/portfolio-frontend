echo "Starting deploy"
if [ "$TRAVIS_PULL_REQUEST" = "true" ]
    then     echo "Is a pull request, don't deploy!" & exit 0
fi
echo "Rename export folder"
mv dist httpdocs
echo "Copying to server"
scp -i deploy_key -r output/httpdocs travis@malte-bartels.de:/var/www/vhosts/malte-bartels.de/
echo "cleaning up" # useful for local testing
rm -rf httpdocs
echo "Finished deployment"
