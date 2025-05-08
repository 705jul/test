const AWS = require('aws-sdk');

exports.handler = (event, context, callback) => {
    const params = {
        Message: event.text,
        PhoneNumber: event.number
    };
    
//asdfasdfasdfasdfasdfasdfasdfasdf
    const publishTextPromise = new AWS.SNS({
        apiVersion: '2010-03-31',
        region: 'ap-northeast-1'
    }).publish(params).promise();
    
    publishTextPromise.then(
        function(data) {
            callback(null, "MessageID is " + data.MessageId)
        }).catch (
            function(err) {
                callback(err);
            }
        );
    };