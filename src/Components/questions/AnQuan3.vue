<template>
    <div>
        <p style="font-size: 45px;"><b>Pwn</b></p>
        <p>在光战士们前仆后继的努力下，终于拿到了Cyrus内部系统的一个程序源码，又在安全组的哥哥姐姐们夜以继日的努力下，发现这个程序中有严重的栈溢出漏洞，或许从而可以拿到Cyrus内部系统的控制权，窃取他们的机密文件，又又在安全组的哥哥姐姐们夜以继日的努力下，发现程序中有很多值得利用的地址:</p>
        <p>pop rax; ret :0x111111</p>
        <p>pop rbx; ret :0x222222</p>
        <p>pop rcx; ret :0x333333</p>
        <p>pop rdx; ret :0x333333</p>
        <p>pop rdi; ret :0x444444</p>
        <p>pop rsi; ret :0x555555</p>
        <p>pop r8; ret :0x666666</p>
        <p>pop r9; ret :0x777777</p>
        <p>pop r10; ret :0x888888</p>
        <p>system函数的地址 :0x114514</p>
        <p>write函数的地址 :0x985985</p>
        <p>read函数的地址 :0x211211</p>
        <p>"/bin/sh"字符串的地址 :0x857857</p>
        <p>"TUT! What Can I Say?"字符串地址 :0x242424</p>
        <br>
        <p>怎么把他们组合起来控制程序的执行流才能拿到Cyrus内部系统的控制权呢？</p>
        <br>
        <p>注意:</p>
        <p>答案是地址的组合，中间用英文逗号(,)隔开，例：0x111111,0x222222,0x333333</p>
        <br>
        <p>Tips:</p>
        <p>什么是pop？什么是ret？寄存器都有哪些？程序执行函数时是怎么利用寄存器传参的？需要执行的是system("/bin/sh")</p>
        


    </div>
</template>
    
    <script>
    export default {
    
    }
    </script>
    
    <style>
    
    </style>