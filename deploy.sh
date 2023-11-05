GOOGLE_PROJECT_ID=bold-artifact-380715
CLOUD_RUN_SERVICE=urmood-api
INSTANCE_CONNECTION_NAME='process.env.INS_NAME'
DB_USER=root
DB_PASS='process.env.DB_PASS'
DB_NAME=solutiondb

gcloud builds submit --tag gcr.io/$GOOGLE_PROJECT_ID/$CLOUD_RUN_SERVICE \
	--project=$GOOGLE_PROJECT_ID

gcloud run deploy $CLOUD_RUN_SERVICE \
	--image gcr.io/$GOOGLE_PROJECT_ID/$CLOUD_RUN_SERVICE \
	--add-cloudsql-instances $INSTANCE_CONNECTION_NAME \
	--update-env-vars INSTANCE_CONNECTION_NAME=$INSTANCE_CONNECTION_NAME,DB_PASS=$DB_PASS,DB_USER=$DB_USER,DB_NAME=$DB_NAME \
	--platform managed \
	--region asia-southeast2 \
	--allow-unauthenticated \
	--project=$GOOGLE_PROJECT_ID
