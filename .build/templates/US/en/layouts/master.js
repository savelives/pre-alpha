(function(){dust.register("layouts/master",body_0);function body_0(chk,ctx){return chk.write("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\" /><title>").block(ctx.getBlock("title"),ctx,{},null).write("</title><meta name=\"description\" content=\"\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"stylesheet\" href=\"css/main.css\"></head><body><div id=\"wrapper\">").block(ctx.getBlock("yield"),ctx,{},null).write("</div><script data-main=\"/js/app\" src=\"/components/requirejs/require.js\"></script></body></html>");}return body_0;})();