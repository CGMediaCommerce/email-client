
    class Example {
        constructor(parent = document.body) {
            this.parent = parent;
            this.id = "Example_";
            this.sub = new subWindow("Example");
            this.draw();
        }
        draw(){
            let button1 = new Button(this.parent, "1", "test");
                button1.onclick = function(){
                    let data0 = email_S.get_by_UID(11966);
                    console.log(data0);
                    let data1 = email_S.getHeader(0, 20);
                    this.drawTable2D(data1);
                }.bind(this);
            this.sub.append(button1.button);
        }
        drawList(data){
            this.table = new Table(this.parent, "Example_List", data);
            this.table.func_drawListElement = function(data, index, listElement){
                let iframe = new DOMElement(listElement.id + "_iframe", "iframe", listElement);
                    iframe.srcdoc = data.htmlmsg;
            }
            this.table.draw();
            this.sub.append(this.table.mainElement);
        }
        drawTable2D(data){
            this.table2D = new Table2D(this.parent, "Example_Table2D", data.length, 5);
            this.table2D.getHead();
            new SpanDiv(this.table2D.getData2Head(0), "", "Absender");
            new SpanDiv(this.table2D.getData2Head(1), "", "Betreff");
            new SpanDiv(this.table2D.getData2Head(2), "", "Datum");
            new SpanDiv(this.table2D.getData2Head(3), "", "gelesen");
            new SpanDiv(this.table2D.getData2Head(4), "", "");

            for(const index in data){
                let mail = data[index];
                console.log(mail);
                new SpanDiv(this.table2D.getData(index, 0), "", JSON_S.escapeHTML(mail.from));
                new SpanDiv(this.table2D.getData(index, 1), "", mail.subject);
                new SpanDiv(this.table2D.getData(index, 2), "", mail.date);
                if(mail.seen != 1){
                    new SpanDiv(this.table2D.getData(index, 3), "", "Ungelesen");
                } else {
                    new SpanDiv(this.table2D.getData(index, 3), "", "gelesen");
                }
                let bt = new Button(this.table2D.getData(index, 4), "remove", "löschen");
                    bt.onclick = function(){
                        email_S.remove_by_UID(mail.uid);
                        this.table2D.getRow(index - 1).remove();
                    }.bind(this);
            }
            this.sub.append(this.table2D.mainElement);

        }
    }