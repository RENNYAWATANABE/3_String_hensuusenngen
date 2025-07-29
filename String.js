//String　文字宣言

let test1 = "プリミティブ型_string";
console.log(test1); //string型プリミティブ

const test2 = "Test";
console.log(test1+test2);

//String型の変数"test1"の文字も検索できる
console.log(test1[4]);
console.log(test1[6]);

//String型の変数"test1"と"test2"のlengthを調べることができる
console.log(test1.length);
console.log(test2.length);

/*
こんにちは！JavaScriptのStringとstringの違いについて説明しますね。
String（オブジェクト）
概要: StringはJavaScriptのビルトインオブジェクトで、文字列をラップするために使用されます。
使用例:

let strObj = new String("Hello, World!");
console.log(typeof strObj); // "object"
特徴: 
プロパティやメソッドを持つオブジェクトとして扱われます。
メソッドを呼び出す際に便利ですが、通常の文字列操作にはあまり使われません。
string（プリミティブ型）
概要: stringはプリミティブ型で、文字列データを直接表します。
使用例:

let strPrim = "Hello, World!";
console.log(typeof strPrim); // "string"
特徴: 
メモリ効率が良く、一般的に文字列操作にはこちらが使われます。
Stringオブジェクトのメソッドも利用可能です。
まとめ
String: オブジェクト型、プロパティやメソッドを持つ。
string: プリミティブ型、軽量で効率的。
どちらを使うかは用途によりますが、通常の文字列操作にはプリミティブ型のstringを使うことをお勧めします。
*/