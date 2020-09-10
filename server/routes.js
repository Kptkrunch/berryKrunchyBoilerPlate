




app.get('/userData', async (req, res) => {

    console.log(req.body)

    try {
        const user = await getReviewData({user: });
        res.json(user);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
});


