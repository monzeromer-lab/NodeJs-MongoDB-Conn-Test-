const assert = require('assert');

exports.insertDocument = (db , document , collection , callback) =>{
const coll= db.collection(collection);
coll.insert(document, (err , result)=>{
    assert.equal(err, null);
    console.log('inserted: ' + result.result.n + "\n document into collection " + collection);
    callback(result);
});
};

exports.findDocuments = (db , collection , callback) =>{
    const coll= db.collection(collection);
    coll.find({}).toArray((err, docs)=>{
        assert.equal(err , null);
        callback(docs);
    });
};

exports.removeDocuments = (db , collection , callback) =>{
    const coll= db.collection(collection);
    coll.deleteOne(document , (err , result)=>{
        assert.equal(err ,null);
        console.log("Removed The Document " , document);
        callback(result);
    })
};

exports.updateDocuments = (db , document , update, collection , callback) =>{
    const coll= db.collection(collection);
    coll.updateOne(document , {$set : update} , null , (err , result)=>{
        assert.equal(err , null);
        console.log("Updated The Document with " , update);
        callback(result);
    });
};