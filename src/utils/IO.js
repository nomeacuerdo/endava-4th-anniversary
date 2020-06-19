const compose = (fn0,fn1) => (...args) => fn0(fn1(...args))
const IO = (db) => (path,callback=a=>a) => ({
  map: (fn) => IO(db)(path,compose(fn,callback)),
  listen: () => {
    const ref = db.ref(path);
		ref.on("value", callback);
		return () => ref.off();
  },
  listenOnce: () => {
    const ref = db.ref(path);
		ref.once("value", callback);
		return () => ref.off();
  },
  create(data) {
    return new Promise((resolve, reject) => {
      const ref = db.ref(path);
      const key = ref.push().key;
      ref.child(key).update(data, error => {
        error
          ? reject(error)
          : resolve({
              key,
              ...data,
            });
      });
    });
  },
})

export default IO;